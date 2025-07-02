import { signOut } from "@/auth";

export default function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        Signout
      </button>
    </form>
  );
}
