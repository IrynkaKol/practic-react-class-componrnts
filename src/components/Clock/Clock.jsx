import { useState, useEffect, useRef } from 'react';
import '../Clock/Clock';

function Clock() {
  const [time, setTime] = useState(() => new Date());
  const intervalId = useRef(null); //current

  useEffect(() => {
    intervalId.current = 
    setInterval(() => {
      console.log('Это интервал каждые 1000ms ' + Date.now());
      setTime(new Date());
    }, 2000);
    return () => {
        console.log('Це функція очисти перед наступним викликом useEffect')
    stop()
    }

  }, []);

  const stop = () => {
    clearInterval(intervalId.current);
  };

  return (
    <div className="Container">
      <p className="Clockface">Текущее время: {time.toLocaleTimeString()}</p>
      <button type="button" onClick={stop}>
        Остановить
      </button>
    </div>
  );
}
/*
class OldClock extends Component {
       state = {
         time: new Date(),
       };
    
       intervalId = null;
    
       componentDidMount() {
         this.intervalId = setInterval(() => {
           console.log('Это интервал каждые 1000ms ' + Date.now());
           this.setState({ time: new Date() });
         }, 1000);
       }
    
       componentWillUnmount() {
         console.log('Эот метод вызывается перед размонтированием компонента');
         this.stop();
       }
    
       stop = () => {
         clearInterval(this.intervalId);
       };
    
       render() {
         return (
           <div className="Container">
             <p className="Clockface">
               Текущее время: {this.state.time.toLocaleTimeString()}
             </p>
             <button type="button" onClick={this.stop}>
               Остановить
             </button>
           </div>
         );
       }
     }*/

export default Clock;
