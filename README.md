# Evaluating Styling Options
This is an evaluation of several CSS in JS frameworks to compare their performance relative to each other and to plain CSS. While a number of other micro benchmarks exist, I wanted to do an evaluation with more realistic components to get a better sense of how the frameworks would perform in the real world, and to get a basic feel for their APIs. This is my first experience using any of the tested frameworks, so while I tried to keep implementations reasonable, it is possible that I'm doing something particularly boneheaded.

This evaluation is not intended to be exhaustive, but to evaluate a few options that were on the table for me at the time of this writing.

## Notes on the Implementations

### css
In this evaluation, this is just plain CSS. In the real world this would be generated by SCSS, Post-CSS, etc, at build time.

### emotion-styled
This implementation uses Emotion's [Styled Components-like API](https://emotion.sh/docs/styled). For the most part, I was able to copy and paste the code from the Styled Components implementation. 

### emotion-css
Emotion also presents a [CSS API](https://emotion.sh/docs/css) that accepts style strings and returns class names.

### emotion-obj
This is the same as the `emotion-css` implementation, except instead of using style strings it passes JS objects to Emotion's `css` function.

### cxs
This is a very small, very fast CSS framework that is most similar to the `emotion-obj` implementation. It is the lightest in terms of features, and also has the smallest community. This was included mostly to see just how close to CSS size and performance a CSS in JS framework could get. 

### cxs-styled
[cxs](https://github.com/cxs-css/cxs) also provides an API that looks somewhat like the Styled Component API. While the results of the normal `cxs` implementation turned out to be rather interesting, I cannot say the same for this one.

## Results

These results were obtained on a 2015 MacBook Pro, 2.7 GHz i5, 16 GB RAM.

```
RESULTS: (sorted by mount time, average of 10 runs)
cxs
  mount:          23.05 ms
  re-render:      18.60 ms
emotion-css
  mount:          23.38 ms
  re-render:      17.84 ms
css
  mount:          23.52 ms
  re-render:      18.02 ms
emotion-obj
  mount:          31.46 ms
  re-render:      21.86 ms
cxs-styled
  mount:          40.08 ms
  re-render:      40.55 ms
emotion-styled
  mount:          49.40 ms
  re-render:      40.81 ms
styled-components
  mount:          59.15 ms
  re-render:      51.56 ms

BUNDLE SIZES: (includes styles and framework, excludes React)
cxs:                19.1 KB
cxs-styled:         20.9 KB
css:                24.7 KB
emotion-css:        36.4 KB
emotion-obj:        36.5 KB
emotion-styled:     44.3 KB
styled-components:  64.9 KB
```

### Conclusions

The performance ratio between the different framework seems to be pretty consistent as the workload is increased. What we're seeing here is not fixed overhead, but a gulf in performance that will widen as more components are piled on. It's possible that I'm doing something incorrectly with [Styled Components](https://www.styled-components.com), but these numbers generally line up with what I've seen elsewhere.

All of the best performers generate CSS and return class names for you to manage. As far as I can tell, [Styled Components](https://www.styled-components.com) does not have an option available for doing this.

My takeaway from this is that for a large site where performance is remotely a concern, I'd stick with compiled CSS, or use [Emotion](https://emotion.sh) in CSS mode. For a small site, I'd probably use [cxs](https://github.com/cxs-css/cxs) because of its tiny size, lack of dependencies, and high performance. It lacks some of the features, tooling, and the larger communities that the other frameworks have, but for a small project that seems like a fair compromise.

## Instructions

To run the benchmarks yourself:

```sh
# Install
yarn

# Build
./build.sh

# Run server
node serve.js

# (In another terminal) Benchmark
node benchmark.js
```

While the server is running you can access the generated pages like this:

- http://localhost:9090/page/css
- http://localhost:9090/page/cxs
- http://localhost:9090/page/cxs-styled
- http://localhost:9090/page/styled-components
- http://localhost:9090/page/emotion-styled
- http://localhost:9090/page/emotion-obj
- http://localhost:9090/page/emotion-css

