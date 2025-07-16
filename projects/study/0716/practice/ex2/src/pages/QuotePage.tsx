import { quotes } from "../data/quotes";
import QuoteCard from "../components/QuoteCard";

export default function QuotePage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">🌟 오늘의 명언</h1>
      {quotes.map((quote, i) => (
        <QuoteCard key={i} text={quote} />
      ))}
    </div>
  );
}
