import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ClerkProvider, SignedIn, UserButton } from "@clerk/clerk-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const RootLayout = () => {
  const queryClient = new QueryClient();

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <QueryClientProvider client={queryClient}>
        <div className="text-white pt-2 pb-2 pl-8 pr-8 h-[100vh] flex flex-col">
          <header className="flex items-center justify-between mt-0">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://cdn.pixabay.com/photo/2023/05/08/00/43/chatgpt-7977357_640.png"
                className="h-10 "
              />
              <span>INTELLEXA</span>
            </Link>
            <div>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="flex-1 overflow-hidden">
            <Outlet />
          </main>
        </div>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default RootLayout;
