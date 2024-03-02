import type { Metadata } from "next";
import { Header } from "@/reusableui/Header";
import { NavLinks } from "../ui/NavLinks";
import { getUserDetails } from "../actions/user";
import { auth } from "../actions/auth";
import { Button } from "@/reusableui/Button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manage | Authjs",
  description:
    "Complete package with a dashboard section to manage your users and other Authentication related things",
};
export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  const user = await getUserDetails();
  if (!session) {
    return (
      <div className="flex flex-col gap-5 justify-center items-center h-dvh">
        <h1 className="text-[80px]">Authentication Required!</h1>
        <Link href={"/auth/signin"}>
          <Button>Sign In</Button>
        </Link>
      </div>
    );
  } else if (user?.role === "MANAGER") {
    return (
      <div>
        <Header />
        <div className="flex gap-16">
          <div className="w-[500px] pt-8 pl-14 pb-8">
            <NavLinks />
          </div>
          <div className="pt-8 pl-3 pr-14 pb-8 w-full">{children}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-dvh text-[80px]">
        Access Denide!
      </div>
    );
  }
}
