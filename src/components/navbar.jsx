export default function Navbar({ setPage, setOpenReserve }) {
  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-[#0f1115]/90 border-b border-white/5">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-3xl text-accent">
          MakerMinds Atelier
        </h1>

        <div className="flex items-center gap-8 text-sm tracking-wide text-gray-300">

          <button
            onClick={() => setPage("home")}
            className="hover:text-white transition"
          >
            HOME
          </button>

          <button
            onClick={() => setPage("menu")}
            className="hover:text-white transition"
          >
            MENU
          </button>

          <button
            onClick={() => setPage("about")}
            className="hover:text-white transition"
          >
            ABOUT
          </button>

          <button
            onClick={() => setOpenReserve(true)}
            className="bg-accent text-black px-5 py-2 rounded-full font-medium hover:scale-105 transition"
          >
            Reserve Table
          </button>

        </div>
      </div>
    </div>
  );
}