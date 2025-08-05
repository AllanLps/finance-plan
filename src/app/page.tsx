import { DashboardCards } from "@/components/dashboard/dashboard-cards";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function Home() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards />
    </div>
  );
}
