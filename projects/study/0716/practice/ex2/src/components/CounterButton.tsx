type Props = { count: number; onClick: () => void };

export default function CounterButton({ count, onClick }: Props) {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      클릭 수 : {count}
    </button>
  );
}
