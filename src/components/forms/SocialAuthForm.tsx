"use client";

import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";

import ROUTES from "@/constants/routes";
import { signIn, signOut } from "next-auth/react";

const SocialAuthForm = () => {
  const btnClassName =
    "cursor-pointer background-dark400_light900 body-medium text-dark200_light800 min-h-12 flex-1 rounded-2 px-4 py-3.5 hover:bg-transparent";

  const handleSignIn = async (provider: "github" | "google") => {
    try {
      await signOut({ redirect: false });
      await signIn(provider, {
        callbackUrl: ROUTES.HOME,
      });
    } catch (error) {
      console.log(error);
      toast.error("Sign-in failed", {
        description:
          error instanceof Error
            ? error.message
            : "An error occured during sign-in",
      });
    }
  };
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button className={btnClassName} onClick={() => handleSignIn("github")}>
        <Image
          src="/icons/github.svg"
          alt="Github Logo"
          width={20}
          height={20}
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with Github</span>
      </Button>
      <Button className={btnClassName} onClick={() => handleSignIn("google")}>
        <Image
          src="/icons/google.svg"
          alt="Google Logo"
          width={20}
          height={20}
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
