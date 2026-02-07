"use client";

import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { navigations } from "@/config/site";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-grow flex-col gap-y-1 p-3">
      <div className="flex flex-grow flex-col gap-y-1">
        {navigations.map((navigation) => {
          const Icon = navigation.icon;
          return (
            <Link
              key={navigation.name}
              href={navigation.href}
              className={cn(
                "flex items-center rounded-md px-3 py-2 hover:bg-slate-200 dark:hover:bg-slate-800",
                pathname === navigation.href
                  ? "bg-slate-200 dark:bg-slate-800"
                  : "bg-transparent",
              )}
            >
              <Icon
                size={18}
                className="mr-3 text-slate-800 dark:text-slate-200"
              />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                {navigation.name}
              </span>
            </Link>
          );
        })}
      </div>

      <SignOutButton>
        <button className="mt-auto flex w-full items-center rounded-md px-3 py-2 text-red-500 transition-colors hover:bg-red-50 dark:hover:bg-red-950/30">
          <LogOut size={18} className="mr-3" />
          <span className="text-sm font-medium">Logout</span>
        </button>
      </SignOutButton>
    </nav>
  );
}
