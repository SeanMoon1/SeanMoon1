type Props = { text: string };

export default function QuoteCard({ text }: Props) {
  return (
    <blockquote className="p-4 italic text-gray-800 border-l-4 border-green-400 bg-green-50">
      {text}
    </blockquote>
  );
}
