import { completedData } from "../data/completedData";
import SummaryTable from "../components/SummaryTable";

export default function ScrapCompletePage() {
  return (
    <main>
      {completedData.map((item) => (
        <SummaryTable user={item.user} car={item.car} date={item.date} />
      ))}
    </main>
  );
}
