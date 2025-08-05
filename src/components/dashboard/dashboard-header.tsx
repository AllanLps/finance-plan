import { DialogComponent } from "../dialogs/dialog-component";

export function DashboardHeader() {
  return (
    <section className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="font-bold text-2xl ">Dashboard</h1>
        <p>Bem-vindo de volta! Aqui está um resumo das suas finanças.</p>
      </div>
      <div className="mt-4">
        <DialogComponent />
      </div>
    </section>
  );
}
