
import React from "react";
import { AnalyzerSidebar } from "./AnalyzerSidebar";

interface AnalyzerLayoutProps {
  children: React.ReactNode;
}

export const AnalyzerLayout = ({ children }: AnalyzerLayoutProps) => {
  return (
    <AnalyzerSidebar>
      {children}
    </AnalyzerSidebar>
  );
};
