import { IconRail } from "@/app/notes/ui/IconRail";
import { NotesList } from "@/app/notes/ui/NotesList";
import Notes from "@/app/notes/ui/Notes";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="flex">
        <div>
          <IconRail />
        </div>
        <div className="flex w-full">
          <NotesList />
          <Notes />
        </div>
      </div>

      {children}
    </div>
  );
}
