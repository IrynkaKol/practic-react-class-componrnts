import { useEffect } from 'react';
import Value from './Value';
import Controls from './Controls';
import './Counter.css';
import { useReducer } from 'react';

function countReducer(state, nexState) {
  return state + nexState;
}
function init(initialState) {
  return initialState
}

function Counter() {
  //const [value, setValue] = useState(0);

  const [value, setValue] = useReducer(countReducer, 0, init);

  const handleIncrement = () => {
    setValue(prevState => prevState + 1);
  };

  const handleDecrement = () => {
    setValue(prevState => prevState - 1);
  };

  useEffect(() => {
    console.log('Запускається useEffect' + Date.now());
  }, [value]);

  return (
    <div className="Counter">
      <Value onValue={value} />
      <Controls onIncrement={handleIncrement} onDecrement={handleDecrement} />
    </div>
  );
}

/*
class OldCounter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
   
  };

  handleIncrement = () => {
    this.setState(prevState => ({
      value: prevState.value + 1,
    }));
    /*console.log('Клікнули у Збільшити');
    console.log(this);
    console.log(event.type);*/
/*};

  handleDecrement = () => {
    this.setState(prevState => ({
      value: prevState.value - 1,
    }));
    /*console.log('Клікнули у Зменшити');
    console.log(this);
    console.log(event);*/
/* };

  render() {
    const { value } = this.state;
    return (
      <div className="Counter">
        <Value onValue={value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}*/

export default Counter;
