import SignIn from "@/components/sign-in";
import { auth } from "@/auth";
import Link from "next/link";
import SignOut from "@/components/sign-out";

export default async function Home() {
  const session = await auth();

  return session ? (
    <div className="flex flex-col gap-4">
      <p>Signed in as {session.user?.name}</p>
      <Link href="/dashboard" className="text-blue-500">
        Dashboard
      </Link>
      <SignOut />
    </div>
  ) : (
    <SignIn />
  );
}
