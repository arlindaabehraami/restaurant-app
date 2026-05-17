export default function ReserveModal({ setOpenReserve, setSuccess }) {

  const handleReserve = () => {
    setOpenReserve(false);
    setSuccess(true);
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

      <div className="bg-[#171a20] p-8 rounded-[30px] w-[420px] border border-white/5">

        <h2 className="text-3xl text-accent mb-6">
          Reserve a Table
        </h2>

        <div className="space-y-3">

          <input className="w-full bg-[#0f1115] p-3 rounded-xl outline-none" placeholder="Full Name" />

          <input className="w-full bg-[#0f1115] p-3 rounded-xl outline-none" placeholder="Email Address" />

          <input className="w-full bg-[#0f1115] p-3 rounded-xl outline-none" placeholder="Phone Number" />

          <input className="w-full bg-[#0f1115] p-3 rounded-xl outline-none" placeholder="Reservation Date" />

        </div>

        <button
          onClick={handleReserve}
          className="w-full bg-accent text-black py-3 rounded-xl mt-5 font-medium hover:scale-[1.02] transition"
        >
          Confirm Reservation
        </button>

        <button
          onClick={() => setOpenReserve(false)}
          className="w-full mt-3 text-gray-400"
        >
          Cancel
        </button>

      </div>

    </div>
  );
}