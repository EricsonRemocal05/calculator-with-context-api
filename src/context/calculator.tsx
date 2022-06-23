import { createContext, ReactNode, useContext, useReducer } from 'react';
import { equals } from '../utils/calculator';
import { ACTION } from '../enums/actions';

type Props = {
  children: ReactNode;
};

type CalculatorAction = {
  type: ACTION;
  payload: any;
};

// const defaultValue = {
//   currentOperand: '',
//   overwrite: true,
//   previousOperand: '',
//   operation: '',
// };

const CalculatorContext = createContext<any>({});

function calculatorReducer(state: any, action: CalculatorAction) {
  console.log(state);
  switch (action.type) {
    case ACTION.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          current: action.payload.digitNumber,
          overwrite: false,
        };
      }

      if (action.payload.digitNumber === 0 && state.current === 0) {
        return state;
      }

      if (action.payload.digitNumber === '.' && state.current.includes('.')) {
        return state;
      }

      return {
        ...state,
        current: `${state.current || ''}${action.payload.digitNumber}`,
      };

    case ACTION.OPERATOR:
      if (state.current == null && state.current == null) {
        return state;
      }

      if (state.current == null) {
        return {
          ...state,
          operation: action.payload.operation,
        };
      }

      if (state.previous == null) {
        return {
          ...state,
          operation: action.payload.operation,
          previous: state.current,
          current: null,
        };
      }

      return {
        ...state,
        previous: equals(state),
        operation: action.payload.operation,
        current: null,
      };
    case ACTION.CLEAR:
      return {};
    case ACTION.DELETE:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          current: null,
        };
      }

      if (state.current === null) return state;

      if (state.current.length === 1) {
        return { ...state, current: null };
      }

      return {
        ...state,
        current: state.current.slice(0, -1),
      };
    case ACTION.EQUAL:
      if (state.operation === null || state.current === null || state.previous === null) return state;

      return {
        ...state,
        overwrite: true,
        previous: null,
        operation: null,
        current: equals(state),
      };
    default:
      break;
  }
}

function CalculatorProvider(props: Props) {
  const [state, dispatch] = useReducer<any>(calculatorReducer, {});

  const value = { state, dispatch };
  return <CalculatorContext.Provider value={value}>{props.children}</CalculatorContext.Provider>;
}

function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) {
    throw new Error('useCalculator must be used within a Calculator Provider');
  }
  return context;
}

export { CalculatorProvider, useCalculator };
