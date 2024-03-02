"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./Button";

export default function CreateNote() {
  const [isOpen, setOPen] = useState(false);
  function open() {
    setOPen(!isOpen);
  }
  return (
    <div>
      <div
        onClick={open}
        className="surface rounded-full p-3 w-fit flex justify-center items-center"
      >
        <Image src={"/icons/plus.svg"} alt="Important" width={25} height={25} />
      </div>
      {isOpen && (
        <div className="surface h-auto w-[700px] p-10 rounded-2xl transform absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2">
          <form>
            <input
              className="surface placeholder:text-3xl text-3xl appearance-none py-2 px-4 w-full leading-loose focus:outline-none focus:border-b-[1px] mt-4 mb-4"
              //   id="input"
              placeholder="What's the topic ?"
              type="text"
              required
              name="topic"
            />
            <input
              className="surface placeholder:text-xl mt-4 mb-4 text-xl appearance-none py-2 px-4 w-full leading-loose focus:outline-none focus:border-b-[1px]"
              //   id="input"
              placeholder="What's the description ?"
              type="text"
              required
              name="description"
            />
            <input
              className="surface placeholder:text-xl mt-4 mb-4 text-xl appearance-none py-2 px-4 w-full leading-loose focus:outline-none focus:border-b-[1px]"
              //   id="input"
              placeholder="Which subject ?"
              type="text"
              required
              name="description"
            />
            <input
              className="surface placeholder:text-xl mt-4 mb-4 text-xl appearance-none py-2 px-4 w-full leading-loose focus:outline-none focus:border-b-[1px]"
              //   id="input"
              placeholder="any pics ?"
              type="file"
              required
              name="description"
            />
            <Button type="submit" className="w-full">
              Add
            </Button>
          </form>
        </div>
      )}
    </div>
  );
}
