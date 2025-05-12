
import React from "react";
import { Link } from "react-router-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavSection = {
  title: string;
  icon?: React.ReactNode;
  href?: string;
  isActive?: boolean;
  children?: {
    title: string;
    href: string;
    isActive?: boolean;
  }[];
};

const navSections: NavSection[] = [
  {
    title: "ORG ANALYSIS",
    children: [
      {
        title: "Org Analyzer",
        href: "/org-analyzer"
      },
    ],
  },
  {
    title: "ERROR ANALYSIS",
    children: [
      {
        title: "Error Analyzer",
        href: "/error-analyzer"
      },
    ],
  },
  {
    title: "MIGRATION ANALYSIS",
    children: [
      {
        title: "Regression Summary",
        href: "/regression-summary"
      },
      {
        title: "Org Regression",
        href: "/org-regression"
      },
      {
        title: "CPTSK Regression",
        href: "/cptsk-regression"
      },
    ],
  },
  {
    title: "QUERY ANALYSIS",
    children: [
      {
        title: "SDB PerfSWAT",
        href: "/sdb-perfswat"
      },
      {
        title: "Org Top SQLs",
        href: "/org-top-sqls"
      },
    ],
  },
  {
    title: "POD ANALYSIS",
    children: [
      {
        title: "Pod Utilization",
        href: "/pod-utilization"
      },
    ],
  },
  {
    title: "AGENTFORCE ANALYZER",
    children: [
      {
        title: "AgentForce Performance Analysis",
        href: "/agentforce-analyzer",
        isActive: true,
      },
    ],
  },
];

interface AnalyzerSidebarProps {
  children: React.ReactNode;
}

export const AnalyzerSidebar = ({ children }: AnalyzerSidebarProps) => {
  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>({
    "AGENTFORCE ANALYZER": true, // Initially expanded
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-svh w-full">
        <Sidebar variant="floating">
          <SidebarHeader className="px-2 py-4 bg-[#4293bb] text-white">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">MENU</h2>
              <SidebarTrigger />
            </div>
          </SidebarHeader>
          <SidebarContent className="bg-slate-50">
            {navSections.map((section) => (
              <div key={section.title} className="mb-0">
                <SidebarMenuButton
                  variant="outline"
                  className={cn(
                    "w-full justify-between rounded-none p-4 bg-[#4293bb] text-white hover:bg-[#3d86aa]",
                    "border-none font-semibold text-left"
                  )}
                  onClick={() => toggleSection(section.title)}
                >
                  {section.title}
                  <ChevronDown 
                    className={cn(
                      "h-4 w-4 transition-transform",
                      openSections[section.title] ? "transform rotate-180" : ""
                    )}
                  />
                </SidebarMenuButton>
                
                {openSections[section.title] && section.children && (
                  <div className="bg-slate-50">
                    {section.children.map((child) => (
                      <Link 
                        key={child.title} 
                        to={child.href}
                        className={cn(
                          "flex w-full items-center gap-2 py-3 px-6 hover:bg-slate-200",
                          child.isActive ? "bg-slate-200" : ""
                        )}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </SidebarContent>
        </Sidebar>
        
        <div className="flex flex-1 flex-col">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};
