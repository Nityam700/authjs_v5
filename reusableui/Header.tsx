import { getUserDetails } from "@/app/auth/actions/user";
import Image from "next/image";
import React from "react";

export async function Header() {
  const user = await getUserDetails();

  return (
    <header className="flex justify-between m-8 items-center">
      <div className="">
        <h1 className="text-3xl">Authjs</h1>
      </div>
      <div>
        <Image
          className="rounded-full"
          src={user?.image || "/images/pp.png"}
          alt="PP"
          width={40}
          height={40}
        />
      </div>
    </header>
  );
}
