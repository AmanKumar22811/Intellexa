import { SignIn } from "@clerk/clerk-react";
import React from "react";

const SignInPage = () => {
  return (
    <div className="h-[100%] flex justify-center items-center">
      <SignIn path="/sign-in" signUpUrl="/sign-up" forceRedirectUrl="/dsahboard"/>
    </div>
  );
};

export default SignInPage;
