import React from 'react';
import Value from './Value'
import Controls from './Controls';
import './Counter.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
    /*constructor () {
  super();
  this.state = {
    value: 0,
  }
}*/
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    /*console.log('Клікнули у Збільшити');
    console.log(this);
    console.log(event.type);*/
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    /*console.log('Клікнули у Зменшити');
    console.log(this);
    console.log(event);*/
  };

  render() {
    return (
      <div className="Counter">
        <Value onValue={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;
