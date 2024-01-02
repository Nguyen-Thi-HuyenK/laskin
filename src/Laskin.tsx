import React, {useState} from 'react';
import * as math from 'mathjs';
import './App.css';

const Laskin: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [operand, setOperand] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleButtonClick = (value: string) => {
    setInput((prevInput) => {
      const updatedInput = prevInput + value;
      return updatedInput;
    });
  };

  const handleCalculate = () => {
    try {
      setOperand(input);
      setResult(math.evaluate(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const handleClear = () => {
    setInput('');
    setOperand('');
    setResult('');
  };

  return (
      <div className='laskin'>
        <h1>Laskin</h1>
        <div className='display'>
        {input && <span>{input}</span>}
        {result && <span>{'='}</span>}
        {result && <span>{result}</span>}
      </div>
          <div className='buttons'>
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button className='operand' onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button className='operand' onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button className='operand' onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={() => handleButtonClick('.')}>.</button>
          <button className='clear' onClick= {handleClear}>C</button>
          <button className='operand' onClick={() => handleButtonClick('/')}>/</button>
          <button className='equals' onClick={handleCalculate}>=</button>
        </div>
      </div>
    );
  }

export default Laskin;
