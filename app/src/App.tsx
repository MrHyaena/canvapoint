import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Templates from "./pages/Templates";
import Homepage from "./pages/Homepage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <div className="flex flex-col items-center gap-10 w-full bg-linear-210 from-slate-100 to-white px-5 pb-10 min-h-screen">
        <Navbar />
        <div className="max-w-[1500px] justify-self-center">
          <main>
            <Routes>
              <Route path="/account" element={<Account />} />
              <Route path="*" element={<Templates />} />
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
