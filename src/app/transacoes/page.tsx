import { TransatcionsHeader } from "@/components/transactions/transactions-header";
import { TransactionsTable } from "@/components/transactions/transactions-table";

export default function TransactionsPage() {
  return (
    <div className="space-y-6 m-8">
      <TransatcionsHeader />
      <TransactionsTable />
    </div>
  );
}
