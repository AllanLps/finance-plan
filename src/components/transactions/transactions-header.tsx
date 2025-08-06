import { NewTransactionDialog } from "../dialogs/new-transaction-dialog";

export function TransatcionsHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-bold text-2xl">Transações</h1>
        <p className="text-muted-foreground">
          Gerencie suas receitas e despesas
        </p>
      </div>
      <div>
        <NewTransactionDialog />
      </div>
    </div>
  );
}
