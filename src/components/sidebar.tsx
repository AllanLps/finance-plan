import {
  ArrowLeftRight,
  CreditCard,
  LayoutDashboard,
  PiggyBank,
  Settings,
  Target,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import Link from "next/link";

export function SideBar() {
  const navItems = [
    {
      href: "/",
      icon: <LayoutDashboard size={20} />,
      title: "Dashboard",
    },
    {
      href: "/transacoes",
      icon: <ArrowLeftRight size={20} />,
      title: "Transações",
    },
    {
      href: "/contas",
      icon: <CreditCard size={20} />,
      title: "Contas",
    },
    {
      href: "/orcamentos",
      icon: <PiggyBank size={20} />,
      title: "Orçamentos",
    },
    {
      href: "/metas",
      icon: <Target size={20} />,
      title: "Metas",
    },
    {
      href: "/configurações",
      icon: <Settings size={20} />,
      title: "Configurações",
    },
  ];
  return (
    <Sidebar>
      <SidebarContent className="bg-gray-200">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xl mb-4 mt-2">
            FinancePlan
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.href}>
                      <span>{item.icon}</span>
                      {item.title}
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
