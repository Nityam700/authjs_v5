import {
  getAccountsCount,
  getSessionCount,
  getUserCount,
} from "@/app/auth/actions/authData";

export async function AuthCard() {
  const userCount = await getUserCount();
  const accountCount = await getAccountsCount();
  const sessionCount = await getSessionCount();
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-2xl">Total Users</p>
        <p>MAXIMUM</p>
        <h1 className="text-4xl font-semibold">{userCount}</h1>
      </div>
      <div className="h-auto w-[0.5px] rounded-lg bg-emerald-50 "></div>
      <div>
        <p className="text-2xl">Total Accounts</p>
        <p>MAXIMUM</p>
        <h1 className="text-4xl font-semibold">{accountCount}</h1>
      </div>
      <div className="h-auto w-[0.5px] rounded-lg bg-emerald-50 "></div>

      <div>
        <p className="text-2xl">Total Active Sessions</p>
        <p>MAXIMUM</p>
        <h1 className="text-4xl font-semibold">{sessionCount}</h1>
      </div>
    </div>
  );
}
