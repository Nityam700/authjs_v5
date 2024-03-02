import Image from "next/image";

export default function Notes() {
  return (
    <div className="p-4 ml-10">
      <h1 className="text-3xl">Your Notes</h1>
      <div className="grid grid-cols-2 gap-4">
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
      </div>
    </div>
  );
}
