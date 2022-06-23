import { ACTION } from '../../enums/actions';

type Props = {
  operation: string;
  onClick: any;
};

const OperationButton = (props: Props) => {
  const { operation, onClick } = props;

  return <button onClick={() => onClick({ type: ACTION.OPERATOR, payload: { operation } })}>{operation}</button>;
};

export default OperationButton;
