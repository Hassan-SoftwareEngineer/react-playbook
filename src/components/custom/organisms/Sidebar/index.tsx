import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router-dom";

export const iframeHeight = "800px"

export const description = "A sidebar with a header and a search form."

const Sidebar : React.FC = () => {
  return (
    <div className="[--header-height:calc(--spacing(14))]">
      <SidebarProvider className="flex flex-col">
        <SiteHeader />
        <div className="flex flex-1">
          <AppSidebar />
            <SidebarInset className="min-h-screen p-4 md:p-6">
              <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}

export  default Sidebar;