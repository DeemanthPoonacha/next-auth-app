import SignIn from "@/components/sign-in";
import { auth } from "@/auth";
import SignOut from "@/components/sign-out";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  console.log("🚀 ~ Home ~ session:", session);

  return session ? (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <div className="flex flex-col gap-4 items-center justify-center text-center">
        {session.user?.image && (
          <Image
            src={session.user?.image}
            alt="User"
            width={150}
            height={150}
            className="rounded-full"
          />
        )}
        <p className="text-2xl font-bold">{session.user?.name}</p>
        <p className="text-lg">Email: {session.user?.email}</p>
      </div>
      <SignOut />
    </div>
  ) : (
    <SignIn />
  );
}
