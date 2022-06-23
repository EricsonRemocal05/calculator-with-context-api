type Props = {
  current: string;
  previous: string;
  operation: string;
};

export function equals(props: Props) {
  const { current, operation, previous } = props;
  console.log(current, operation, previous);

  const prev = parseFloat(previous);
  const curr = parseFloat(current);
  let total: number = 0;

  if (isNaN(prev) || isNaN(curr)) return '';

  switch (operation) {
    case '÷':
      total = prev / curr;
      break;
    case '*':
      total = prev * curr;
      break;
    case '-':
      total = prev - curr;
      break;
    case '+':
      total = prev + curr;
      break;
    case '%':
      total = prev % curr;
      break;
  }

  return total.toString();
}

const NUMBER_FORMATTER = new Intl.NumberFormat('en-us', { maximumFractionDigits: 0 });

export function formatNumber(operand: any) {
  if (operand == null) return;
  const [integer, decimal] = operand.split('.');
  if (decimal == null) return NUMBER_FORMATTER.format(integer);
  return `${NUMBER_FORMATTER.format(integer)}.${decimal}`;
}
