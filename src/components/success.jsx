import { useEffect } from "react";

export default function Success({ setSuccess }) {

  useEffect(() => {

    const timer = setTimeout(() => {
      setSuccess(false);
    },3000);

    return () => clearTimeout(timer);

  },[]);

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

      <div className="bg-[#171a20] p-10 rounded-[30px] text-center border border-white/5">

        <h2 className="text-3xl text-accent">
          Reservation Successful
        </h2>

        <p className="text-gray-400 mt-3">
          Your table has been reserved successfully.
        </p>

      </div>

    </div>
  );
}