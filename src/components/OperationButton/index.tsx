type Props = {
  operation: string;
};

const OperationButton = (props: Props) => {
  const { operation } = props;

  return <button>{operation}</button>;
};

export default OperationButton;
