import Image from "next/image";
import Link from "next/link";

export function IndividualTask() {
  return (
    <div className="p-4">
      <h1>Back</h1>
      <div className="surface p-3 rounded-lg mt-5">
        <div className="rounded-lg ">
          <h1 className="text-xl">Complete Modern Physics in 1 day</h1>
          <p>Test On 20th October</p>
        </div>
        <Image
          src={"/images/modernphysics.png"}
          className="bg-white rounded-lg w-full h-auto"
          alt="MP"
          width={400}
          height={350}
        />
      </div>
      <div className="flex gap-2 items-center surface p-2 rounded-lg mt-2">
        <Image
          src={"/icons/calendar.svg"}
          alt="Calendar"
          width={25}
          height={25}
        />
        <p>Scheduled for: </p>
      </div>
      <div className="flex gap-2 items-center surface p-2 rounded-lg mt-2">
        <Image src={"/icons/check.svg"} alt="Calendar" width={25} height={25} />
        <p>Mark Completed</p>
      </div>
      <div className="flex gap-2 items-center surface p-2 rounded-lg mt-2">
        <Image src={"/icons/notes.svg"} alt="Calendar" width={25} height={25} />
        <p>Attend the lecture for more refrence</p>
      </div>
      <div className="flex gap-2 items-center surface p-2 rounded-lg mt-2">
        <Image src={"/icons/link.svg"} alt="Calendar" width={25} height={25} />
        <Link href={"/"}>Lecture: Lecture 1 on Modern Physics</Link>
      </div>
    </div>
  );
}
