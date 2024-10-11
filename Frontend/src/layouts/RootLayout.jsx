import React from "react";
import { Link, Outlet } from "react-router-dom";
import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}
const RootLayout = () => {
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <div className="text-white pt-4 pb-4 pl-16 pr-16 h-[100vh] flex flex-col">
        <header className="flex items-center justify-between ">
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
    </ClerkProvider>
  );
};

export default RootLayout;
