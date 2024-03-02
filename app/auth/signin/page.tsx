import { Button } from "@/reusableui/Button";
import Image from "next/image";
import Link from "next/link";
import { authGithub, authGoogle, authSignOut } from "@/app/auth/actions/signin";
import { auth } from "@/app/auth/actions/auth";

export default async function Signin() {
  const session = await auth();
  return (
    <div className=" overflow-hidden flex flex-col justify-center items-center h-dvh gap-3">
      <h1>Sign in to continue to Authjs!</h1>
      <form action={authGoogle}>
        <Button
          type="submit"
          className="w-96 justify-center flex gap-3 items-center"
        >
          <Image
            className="invert-[0.78]"
            src={"/icons/google.svg"}
            alt="Google"
            width={30}
            height={30}
          />
          Continue with Google
        </Button>
      </form>
      <form action={authGithub}>
        <Button
          type="submit"
          className="w-96 justify-center flex gap-3 items-center"
        >
          <Image
            className="invert-[0.78]"
            src={"/icons/github.svg"}
            alt="Google"
            width={30}
            height={30}
          />
          Continue with Github
        </Button>
      </form>
      {session && (
        <form action={authSignOut}>
          <Button className="w-96" type="submit">
            Sign Out
          </Button>
        </form>
      )}
      <Link href={"/"}>Back</Link>
    </div>
  );
}
