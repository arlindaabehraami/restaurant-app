export default function Home({ setPage }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">

      <div className="max-w-5xl grid md:grid-cols-2 gap-14 items-center">

        <div>

          <p className="text-accent tracking-[5px] text-sm mb-4">
            LUXURY DINING EXPERIENCE
          </p>

          <h1 className="text-6xl leading-tight">
            Where elegance meets unforgettable taste.
          </h1>

          <p className="text-gray-400 mt-6 leading-7">
            Discover premium cuisine, handcrafted desserts and refined drinks in an atmosphere designed for modern luxury.
          </p>

          <div className="mt-8 flex gap-4">

            <button
              onClick={() => setPage("menu")}
              className="bg-accent text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
            >
              Explore Menu
            </button>

            <button
              onClick={() => setPage("about")}
              className="border border-white/10 px-6 py-3 rounded-full hover:bg-white/5 transition"
            >
              Our Story
            </button>

          </div>

        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200"
            className="rounded-[30px] h-[600px] w-full object-cover shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
}