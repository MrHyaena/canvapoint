import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Templates from "./pages/Templates";
import Homepage from "./pages/Homepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretUp } from "@fortawesome/free-regular-svg-icons";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

function ProtectedRoute() {
  return (
    <>
      <div className="w-16 h-16 fixed bg-secondary rounded-xl bottom-10 right-10 flex items-center justify-center">
        <FontAwesomeIcon
          icon={faCircleUp}
          className="text-4xl text-textLight"
        />
      </div>
      <div className="grid gird-rows-[100px_1fr] gap-10 w-full bg-linear-210 from-slate-100 to-white p-5">
        <Navbar />
        <div className="max-w-[1500px] justify-self-center">
          <main>
            <Routes>
              <Route path="*" element={<Homepage />} />
              <Route path="/account" element={<Account />} />
              <Route path="/templates" element={<Templates />} />
            </Routes>
          </main>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ProtectedRoute />} />
          <Route path="/login" element={<Account />} />
          <Route path="/password" element={<Account />} />
          <Route path="/password/reset" element={<Account />} />
          <Route path="/signup" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
