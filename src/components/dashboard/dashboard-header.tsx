import { NewTransactionDialog } from "../dialogs/new-transaction-dialog";

export function DashboardHeader() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-bold text-2xl ">Dashboard</h1>
        <p className="text-muted-foreground">
          Bem-vindo de volta! Aqui está um resumo das suas finanças.
        </p>
      </div>
      <div className="mt-4">
        <NewTransactionDialog />
      </div>
    </section>
  );
}
