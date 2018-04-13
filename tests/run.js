import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import testData from '../tests/data';

const noop = () => {};

const options = [
  [0, 'Role One'],
  [1, 'Role Two'],
  [2, 'Role Three'],
  [3, 'Role Four'],
  [4, 'Role Five'],
  [5, 'Role Six'],
];

class Root extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData.initial,
    };
  }

  componentWillMount() {
    performance.mark('willMount');
  }

  componentDidMount() {
    performance.mark('didMount');
    performance.measure('mount', 'willMount', 'didMount');

    setTimeout(() => {
      performance.mark('willRerender');
      this.setState({
        data: testData.update,
      });
    }, 0);
  }

  componentDidUpdate() {
    performance.mark('didRerender');
    performance.measure('re-render', 'willRerender', 'didRerender');
  }

  render() {
    const {
      Checkbox,
      Select,
      Group,
    } = this.props.components;

    return (
      <div>
        {this.state.data.map((g, i) => 
          <Group 
            index={i} 
            options={options}
            onChange={noop}
            {...g}
          />
        )}
      </div>
    );
  }
}

export default function run(components) {
  ReactDOM.render(<Root components={components}/>, document.getElementById('root'));
}

