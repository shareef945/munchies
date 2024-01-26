import React from "react";
import { Separator } from "@/components/ui/separator";
import ProfileForm from "@/pages/settings/profile-form";
import SidebarNav from "./components/sidebar-nav";
import Navbar from "@/components/shared/navbar";

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
      <Navbar />
        <div className="hidden space-y-6 p-10 pb-16 md:block">
          <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
            <aside className="-mx-4 lg:w-1/5">
              <SidebarNav items={sidebarNavItems} />
            </aside>
            <div className="flex-1 lg:max-w-2xl">
              {" "}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Profile</h3>
                  <p className="text-sm text-muted-foreground">
                    This is how others will see you on the site.
                  </p>
                </div>
                <Separator />
                <ProfileForm />
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Settings;
