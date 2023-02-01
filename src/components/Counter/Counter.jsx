import { useEffect } from 'react';
import Value from './Value';
import Controls from './Controls';
import './Counter.css';
import { useReducer } from 'react';

function reduce (state, action) {
  switch(action.type){
    case 'increment':
      return {
        ...state,
        value: state.value + 1
      }
      case 'decrement':
        return {
          ...state,
        value: state.value - 1
        }
        default:
         return state
  }
}
const initialState = {
  value: 0
}

function Counter() {
  //const [value, setValue] = useState(0);

  const [state, dispatch] = useReducer(reduce, initialState);

  const handleIncrement = () => {
    dispatch({type: 'increment'})
  };

  const handleDecrement = () => {
    dispatch({type: 'decrement'})
  };

  useEffect(() => {
    console.log('Запускається useEffect' + Date.now());
  }, [state]);

  return (
    <div className="Counter">
      <Value onValue={state.value} />
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
