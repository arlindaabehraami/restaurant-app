export default function Reserve() {
  return (
    <div className="p-10 max-w-md mx-auto">
      
      <h1 className="text-4xl font-serif text-yellow-400 text-center mb-6">
        Reserve a Table
      </h1>

      <div className="space-y-4">
        <input className="w-full p-3 rounded bg-white/10" placeholder="Full Name" />
        <input className="w-full p-3 rounded bg-white/10" placeholder="Email" />
        <input className="w-full p-3 rounded bg-white/10" placeholder="Date" />

        <button className="w-full bg-yellow-500 text-black py-3 rounded font-bold">
          Confirm Reservation
        </button>
      </div>
    </div>
  );
}