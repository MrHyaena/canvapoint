import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Account from "./pages/Account";
import Sidebar from "./components/Sidebar";

function ProtectedRoute() {
  return (
    <>
      <Sidebar />
      <div>
        <main>
          <Routes>
            <Route path="*" element={<Homepage />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </main>
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
          <Route path="/account" element={<Account />} />
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
