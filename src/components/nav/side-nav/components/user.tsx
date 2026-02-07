import { UserButton, useUser } from "@clerk/nextjs";

export default function User() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <div className="flex h-16 items-center border-b border-border px-4">
      <div className="flex w-full items-center justify-between rounded-md py-1 overflow-hidden">
        <div className="flex items-center gap-3 overflow-hidden">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-9 w-9 shrink-0",
              },
            }}
          />
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium truncate">
              {user?.fullName || user?.username || "User"}
            </span>
            <span className="text-xs text-muted-foreground truncate">
              {user?.primaryEmailAddress?.emailAddress || "Agent Admin"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
