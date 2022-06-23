import './App.css';

import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';
import { useCalculator } from './context/calculator';
import { ACTION } from './enums/actions';
import { formatNumber } from './utils/calculator';

function App() {
  const { state, dispatch }: any = useCalculator();
  console.log(state);

  return (
    <div className='container'>
      <div className='output'>
        <div className='prev'>
          {formatNumber(state.previous)} {state.operation}
        </div>
        <div className='curr'>{formatNumber(state.current)}</div>
      </div>
      <button onClick={() => dispatch({ type: ACTION.CLEAR })}>C</button>
      <button onClick={() => dispatch({ type: ACTION.DELETE })}>Del</button>
      <OperationButton onClick={dispatch} operation='%' />
      <OperationButton onClick={dispatch} operation='÷' />
      <DigitButton onClick={dispatch} digitNumber='1' />
      <DigitButton onClick={dispatch} digitNumber='2' />
      <DigitButton onClick={dispatch} digitNumber='3' />
      <OperationButton onClick={dispatch} operation='*' />
      <DigitButton onClick={dispatch} digitNumber='4' />
      <DigitButton onClick={dispatch} digitNumber='5' />
      <DigitButton onClick={dispatch} digitNumber='6' />
      <OperationButton onClick={dispatch} operation='-' />
      <DigitButton onClick={dispatch} digitNumber='7' />
      <DigitButton onClick={dispatch} digitNumber='8' />
      <DigitButton onClick={dispatch} digitNumber='9' />
      <OperationButton onClick={dispatch} operation='+' />
      <DigitButton onClick={dispatch} className='two-span-btn' digitNumber='0' />
      <DigitButton onClick={dispatch} digitNumber='.' />
      <button onClick={() => dispatch({ type: ACTION.EQUAL })}>=</button>
    </div>
  );
}

export default App;
