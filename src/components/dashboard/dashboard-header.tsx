import { DialogComponent } from "../dialog/dialog-component";

export function DashboardHeader() {
  return (
    <section>
      <div>
        <h1>Dashboard</h1>
        <p>Bem-vindo de volta! Aqui está um resumo das suas finanças</p>
      </div>
      <div>
        <DialogComponent />
      </div>
    </section>
  );
}
