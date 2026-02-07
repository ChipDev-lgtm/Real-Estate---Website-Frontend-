import { UserButton, useUser } from "@clerk/nextjs";

export default function User() {
  const { user, isLoaded } = useUser();

  if (!isLoaded) return null;

  return (
    <div className="flex h-16 items-center border-b border-border px-4">
      <div className="flex w-full items-center justify-between rounded-md py-1">
        <div className="flex items-center gap-3">
          <UserButton
            appearance={{
              elements: {
                avatarBox: "h-9 w-9",
              },
            }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium">
              {user?.fullName || user?.username || "User"}
            </span>
            <span className="text-xs text-muted-foreground">
              {user?.primaryEmailAddress?.emailAddress || "Agent Admin"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
