import { Button } from "@/reusableui/Button";
import { Header } from "@/reusableui/Header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <Header />
      <div className="transform absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <h1 className="text-[50px] md:text-[80px] text-center mb-5">
          Auth folder prepared for you.
        </h1>
        <p className="md:text-[24px] text-xl text-center mb-5">
          Complete package with a dashboard section to manage your users and
          other Authentication related things
        </p>
        <div className="flex justify-center gap-5">
          <Link href={"/auth/manage"}>
            <Button>Get Started</Button>
          </Link>
          <Link href={"/auth/signin"}>
            <Button>Sign In</Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
