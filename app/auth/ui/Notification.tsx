export function NotificationCard() {
  return (
    <div className="flex justify-between">
      <div>
        <p className="text-2xl">Access Request</p>
        <p>RECENT</p>
        <h1 className="text-4xl font-semibold">12</h1>
      </div>
      <div className="h-auto w-[0.5px] rounded-lg bg-emerald-50 "></div>
      <div>
        <p className="text-2xl">Reports</p>
        <p>RECENT</p>
        <h1 className="text-4xl font-semibold">48</h1>
      </div>
      <div className="h-auto w-[0.5px] rounded-lg bg-emerald-50 "></div>

      <div>
        <p className="text-2xl">Pending Issues</p>
        <p>RECENT</p>
        <h1 className="text-4xl font-semibold">7</h1>
      </div>
    </div>
  );
}
