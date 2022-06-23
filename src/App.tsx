import './App.css';

import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {
  return (
    <div className='container'>
      <div className='output'>
        <div className='prev'>1</div>
        <div className='curr'>2</div>
      </div>
      <button className='two-span-btn'>AC</button>
      <button>Del</button>
      <OperationButton operation='÷' />
      <DigitButton digitNumber='1' />
      <DigitButton digitNumber='2' />
      <DigitButton digitNumber='3' />
      <OperationButton operation='*' />
      <DigitButton digitNumber='4' />
      <DigitButton digitNumber='5' />
      <DigitButton digitNumber='6' />
      <OperationButton operation='-' />
      <DigitButton digitNumber='7' />
      <DigitButton digitNumber='8' />
      <DigitButton digitNumber='9' />
      <OperationButton operation='+' />
      <DigitButton className='two-span-btn' digitNumber='0' />
      <DigitButton digitNumber='.' />
      <DigitButton digitNumber='=' />
    </div>
  );
}

export default App;
