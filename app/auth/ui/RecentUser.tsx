import { getRecentUser } from "@/app/auth/actions/authData";
export async function RecentUser() {
  const user = await getRecentUser();
  return (
    <table className="w-full">
      <thead>
        <tr className="">
          <th className="text-left pb-3">Name</th>
          <th className="text-left pb-3">Username</th>
          <th className="text-left">Email</th>
          <th className="text-left">Provider</th>
          <th className="text-left">Role</th>
        </tr>
      </thead>
      {user?.map((user) => (
        <tbody key={user.userName} className="mt-3">
          <tr className="border-b-[1px] border-t-[1px] border-[#ccccccab]">
            <td className="text-left pt-3 pb-3">{user.name}</td>
            <td className="text-left pt-3 pb-3">{user.userName}</td>
            <td className="text-left">{user.email}</td>
            <td className="flex gap-3 pt-3 items-center">
              {user?.accounts.map((account) => (
                <div key={account.provider}>
                  {account.provider === "google" && <p>Google</p>}
                  {account.provider === "github" && <p>Github</p>}
                </div>
              ))}
            </td>
            <td className="text-left">{user.role}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
