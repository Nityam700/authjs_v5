import { getAllUser } from "@/app/auth/actions/authData";
import {
  makeAdmin,
  makeManager,
  makeUser,
  suspendUser,
  updateUser,
} from "@/app/auth/actions/user";
import { EditPopup } from "./EditPopup";
import Image from "next/image";
import { Button } from "@/reusableui/Button";
export async function UserList() {
  const user = await getAllUser();
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
        <tbody key={user.userName}>
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
            <td className="text-right">
              <EditPopup
                className="w-auto p-10 h-auto rounded-2xl"
                openText="More"
              >
                <div>
                  {user.role === "SUSPENDED" && (
                    <div className="bg-red-500 mb-5 text-[#121212] w-full p-4 rounded-md">
                      <p>User is Suspended</p>
                    </div>
                  )}
                  <form action={updateUser}>
                    <div className="flex gap-3">
                      <div>
                        <Image
                          src={user.image || ""}
                          alt={user.name || ""}
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex flex-col gap-3 w-full">
                        <input
                          className="p-[6px] surface border rounded-md"
                          defaultValue={user.id}
                          name="id"
                          hidden
                        />
                        <input
                          className="p-[6px] surface border rounded-md"
                          defaultValue={user.name || ""}
                          placeholder="Update Name"
                          name="name"
                        />
                        <input
                          className="p-[6px] surface border rounded-md"
                          defaultValue={user.userName || ""}
                          placeholder="Update Username"
                          name="username"
                        />
                      </div>
                    </div>
                    <div className="mt-5">
                      <div>
                        <label>Email</label>
                        <input
                          className="p-[6px] w-full surface border rounded-md"
                          defaultValue={user.email || ""}
                          name="email"
                          disabled
                        />
                      </div>
                      <div>
                        <label>Bio</label>
                        <input
                          className="p-[6px] w-full surface border rounded-md"
                          placeholder="Update Bio"
                          name="bio"
                          defaultValue={user.bio || "Nan"}
                        />
                      </div>
                      <div>
                        <label>Links</label>
                        <input
                          className="p-[6px] w-full surface border rounded-md"
                          placeholder="Update Bio"
                          name="links"
                          defaultValue={user.links || "Nan"}
                        />
                      </div>
                    </div>
                    <Button type="submit" className="w-full mt-4 mb-4">
                      Update
                    </Button>
                  </form>
                  <div>
                    <p>Roles</p>
                    <div className="flex gap-4">
                      <form action={suspendUser}>
                        <input
                          name="username"
                          hidden
                          defaultValue={user.userName}
                        />
                        <Button type="submit">SUSPEND</Button>
                      </form>
                      <form action={makeAdmin}>
                        <input
                          name="username"
                          hidden
                          defaultValue={user.userName}
                        />
                        <Button>ADMIN</Button>
                      </form>
                      <form action={makeUser}>
                        <input
                          name="username"
                          hidden
                          defaultValue={user.userName}
                        />
                        <Button>USER</Button>
                      </form>
                      <form action={makeManager}>
                        <input
                          name="username"
                          hidden
                          defaultValue={user.userName}
                        />
                        <Button>MANAGER</Button>
                      </form>
                    </div>
                  </div>
                </div>
              </EditPopup>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
