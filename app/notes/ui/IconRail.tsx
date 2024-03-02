import CreateNote from "@/reusableui/CreateNote";
import Image from "next/image";

export function IconRail() {
  return (
    <div className="flex justify-between pb-4 pt-4 items-center flex-col w-20 h-dvh">
      <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
        <Image src={"/icons/lock.svg"} alt="Important" width={25} height={25} />
      </div>
      <div className="flex flex-col justify-center items-center gap-3">
        <CreateNote />
        <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
          <Image
            src={"/icons/calendar.svg"}
            alt="Important"
            width={25}
            height={25}
          />
        </div>
        <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
          <Image
            src={"/icons/star.svg"}
            alt="Important"
            width={25}
            height={25}
          />
        </div>
        <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
          <Image
            src={"/icons/missed.svg"}
            alt="Important"
            width={25}
            height={25}
          />
        </div>{" "}
        <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
          <Image
            src={"/icons/notes.svg"}
            alt="Important"
            width={25}
            height={25}
          />
        </div>
      </div>
      <div className="surface rounded-full p-3 w-fit flex justify-center items-center">
        <Image
          src={"/icons/settings.svg"}
          alt="Important"
          width={25}
          height={25}
        />
      </div>
    </div>
  );
}
