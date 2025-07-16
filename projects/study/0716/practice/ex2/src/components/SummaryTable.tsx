type Summary = { user: string; car: string; date: string };

export default function SummaryTable({ user, car, date }: Summary) {
  return (
    <div className="items-center w-1/4 p-4 text-center bg-gray-200 rounded-md shadow-md h-1/4">
      <h2>{user}</h2>
      <p>{car}</p>
      <p>{date}</p>
    </div>
  );
}
