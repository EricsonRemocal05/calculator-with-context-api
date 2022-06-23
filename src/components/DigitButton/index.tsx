import { ACTION } from '../../enums/actions';

type Props = {
  digitNumber: string;
  className?: string;
  onClick: any;
};

const DigitButton = (props: Props) => {
  const { digitNumber, className, onClick } = props;

  return (
    <button className={className} onClick={() => onClick({ type: ACTION.ADD_DIGIT, payload: { digitNumber } })}>
      {digitNumber}
    </button>
  );
};

export default DigitButton;
