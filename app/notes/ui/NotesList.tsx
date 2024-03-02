export function NotesList() {
  return (
    <div className="w-80 ml-10 p-4">
      <h1 className="text-3xl">Your List</h1>
      <div className="mt-4">
        <h1 className="font-semibold text-xl mt-2">Physics</h1>
        <div className="leading-loose ">
          <p className="hover:underline cursor-pointer">Kinmatics</p>
          <p className="hover:underline cursor-pointer">Thermodynamics</p>
          <p className="hover:underline cursor-pointer">Center of Mass</p>
          <p className="hover:underline cursor-pointer">
            Work Power and energy
          </p>
          <p className="hover:underline cursor-pointer">Friction</p>
          <p className="hover:underline cursor-pointer">Modern Physics</p>
        </div>
      </div>
    </div>
  );
}
