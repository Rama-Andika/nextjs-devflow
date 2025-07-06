"use client";

import { useSession } from "next-auth/react";

const page = () => {
  const session = useSession();
  console.log(session);
  return (
    <div>
      <h1 className="h1-bold">Welcome To Next Js</h1>
    </div>
  );
};

export default page;
