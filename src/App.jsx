import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import ReserveModal from "./components/ReserveModal";
import Success from "./components/Success";

export default function App() {

  const [page,setPage] = useState("home");
  const [openReserve,setOpenReserve] = useState(false);
  const [success,setSuccess] = useState(false);

  return (
    <div>

      <Navbar
        setPage={setPage}
        setOpenReserve={setOpenReserve}
      />

      {page === "home" && <Home setPage={setPage} />}
      {page === "menu" && <Menu />}
      {page === "about" && <About />}

      {openReserve && (
        <ReserveModal
          setOpenReserve={setOpenReserve}
          setSuccess={setSuccess}
        />
      )}

      {success && (
        <Success setSuccess={setSuccess} />
      )}

    </div>
  );
}