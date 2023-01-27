import { useState } from 'react';
import './ColorPicker.css';

function ColorPicker ({options}) {
const [activeOptionIdx, setActiveOptionIdx] = useState(0)

const {label} = options[activeOptionIdx]

const makeOptionClassName = index => {
  const optionClasses = ['ColorPicker__option'];

    if (index === activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
}
  
/*const setActiveIdx = index => {
  setActiveOptionIdx(index)
}*/

  return (
    <div className="ColorPicker">
      <h2 className="ColorPicker__title">Color Picker</h2>
      <p>Обрали колір: {/*options[activeOptionIdx].*/label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{
              backgroundColor: color,
            }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}


/*
class OLdColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIdx = index => {
this.setState({activeOptionIdx: index})
  }

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }
    return optionClasses.join(' ');
  };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const {label} = options[activeOptionIdx];
    
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Обрали колір: {label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                backgroundColor: color,
              }}
              onClick={() => this.setActiveIdx(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
*/
export default ColorPicker;
