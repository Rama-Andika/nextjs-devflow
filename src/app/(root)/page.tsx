"use client";

import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import { signOut, useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome To Next Js</h1>
      <div className="px-3 pt-[100px]">
        <Button onClick={() => signOut({ callbackUrl: ROUTES.SIGN_IN })}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default page;
