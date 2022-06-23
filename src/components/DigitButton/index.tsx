type Props = {
  digitNumber: string;
  className?: string;
};

const DigitButton = (props: Props) => {
  const { digitNumber, className } = props;

  return <button className={className}>{digitNumber}</button>;
};

export default DigitButton;
