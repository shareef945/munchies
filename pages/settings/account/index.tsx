import React from "react";
// import SettingsLayout from "../settings/layout";
import { Separator } from "@/components/ui/separator";
// import { ProfileForm } from "@/pages/settings/profile-form";
import  SidebarNav  from "../components/sidebar-nav";
import  AccountForm  from "./account-form";

const Settings = () => {
  const sidebarNavItems = [
    {
      title: "Profile",
      href: "/settings/",
    },
    {
      title: "Account",
      href: "/settings/account",
    },
    {
      title: "Appearance",
      href: "/settings/appearance",
    },
    {
      title: "Notifications",
      href: "/settings/notifications",
    },
    {
      title: "Display",
      href: "/settings/display",
    },
  ];
  return (
    <>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Settings</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            {" "}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground">
                  Update your account settings. Set your preferred language and
                  timezone.
                </p>
              </div>
              <Separator />
              <AccountForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
