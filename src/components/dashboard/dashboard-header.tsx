import { DialogComponent } from "../dialogs/dialog-component";

export function DashboardHeader() {
  return (
    <section className="block items-center justify-around p-4 sm:flex">
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
