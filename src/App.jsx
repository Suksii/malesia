import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import CulturePage from "./pages/CulturePage.jsx";
import EconomyPage from "./pages/EconomyPage.jsx";
import PoliticsPage from "./pages/PoliticsPage.jsx";
import PageLayout from "./pageLayout/PageLayout.jsx";
import React from "react";

function App() {

  return (
    <>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route element={<PageLayout />}>
                <Route path="/istorija" element={<HistoryPage />} />
                <Route path="/kultura" element={<CulturePage />} />
                <Route path="/ekonomija" element={<EconomyPage />} />
                <Route path="/politika" element={<PoliticsPage />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
