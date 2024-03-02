import { AuthCard } from "@/app/auth/ui/AuthCard";
import { NotificationCard } from "@/app/auth/ui/Notification";
import { RecentUser } from "@/app/auth/ui/RecentUser";

export default function page() {
  return (
    <div>
      <div>
        <h1 className="text-3xl leading-loose">Welcome to auth js!</h1>
        <p>Here is your recent auth stuffs -</p>
        <div className="mt-5 mb-5">
          <AuthCard />
        </div>
        <div className="w-full bg-[#ccccccab] h-[0.5px] mt-8 mb-8"></div>
        <div>
          <h1 className="text-3xl mb-3">Recent Users</h1>
          <RecentUser />
        </div>
        <div className="w-full bg-[#ccccccab] h-[0.5px] mt-8 mb-8"></div>
        <div>
          <h1 className="text-3xl mb-3">Recent Notifications</h1>
          <NotificationCard />
        </div>
      </div>
    </div>
  );
}
