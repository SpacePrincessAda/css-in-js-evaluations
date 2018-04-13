const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

const NUMBER_OF_RUNS = 10;

function run(url, opts, config=null) {
  return chromeLauncher.launch({chromeFlags: opts.chromeFlags}).then(chrome => {
    opts.port = chrome.port;
    return lighthouse(url, opts, config).then(results => {
      // The gathered artifacts are typically removed as they can be quite large (~50MB+)
      delete results.artifacts;
      return chrome.kill().then(() => results)
    });
  });
}

const opts = {};

// Very minimal lighthouse config since we only care about user-timings
const config = {
  settings: {},
  passes: [
    {
      passName: 'defaultPass',
      recordTrace: true,
      useThrottling: false,
      pauseAfterLoadMs: 0,
      networkQuietThresholdMs: 0,
      cpuQuietThresholdMs: 0,
      gatherers: [],
    },
  ],
  audits: ['user-timings'],
};

function avg(arr) {
  let total = 0;
  for (let i=0; i<arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

async function test(name) {
  const stats = {};
  const order = new Set();
  for (let i=0; i<NUMBER_OF_RUNS; i++) {
    const results = await run(`http://localhost:9090/page/${name}`, opts, config);
    const timings = results.audits['user-timings'].extendedInfo.value;

    timings.forEach(val => {
      if (val.duration) {
        order.add(val.name);
        if (stats[val.name] === undefined) {
          stats[val.name] = [];
        }
        stats[val.name].push(val.duration);
      }
    });
  }
  return Array.from(order.values()).map(name => ({name, time: avg(stats[name])}));
}

function getBundleSize(name) {
  const stats = fs.statSync(path.join('dist', 'bundle', `${name}.js`));
  return stats.size;
}

const tests = [
  'css',
  'styled-components',
  'emotion-styled',
  'emotion-obj',
  'emotion-css',
  'cxs',
  'cxs-styled',
];

const getTimeForKey = (item, sortKey) => item[1].find(o => o.name === sortKey).time;

async function main() {
  const results = [];
  for (let i=0; i<tests.length; i++) {
    const name = tests[i];
    const r = await test(name);
    results.push([name, r]);
  }

  const sortKey = 'mount';
  console.log(`RESULTS: (sorted by ${sortKey} time, average of ${NUMBER_OF_RUNS} runs)`);
  results.sort((a, b) => getTimeForKey(a, sortKey) - getTimeForKey(b, sortKey));
  results.forEach(result => {
    const name = result[0];
    const stats = result[1];
    console.log(name);
    stats.forEach(stat => {
      const label = `${stat.name}:`;
      console.log(`  ${label.padEnd(15)} ${stat.time.toFixed(2)} ms`);
    });
  });
  console.log('');

  console.log('BUNDLE SIZES: (includes styles and framework, excludes React)')
  const sizes = tests.map(n => [n, getBundleSize(n)]);
  sizes.sort((a, b) => a[1] - b[1]);
  sizes.forEach(([name, size]) => {
    const label = `${name}:`;
    console.log(`${label.padEnd(20)}${(size/1024).toFixed(1)} KB`);
  });
}

main();

