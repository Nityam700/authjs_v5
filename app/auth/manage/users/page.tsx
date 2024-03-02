import { UserList } from "../../ui/UserList";

export default function Users() {
  return (
    <div>
      <h1 className="leading-loose text-4xl mb-8">All Users</h1>
      <div>
        <UserList />
      </div>
    </div>
  );
}
