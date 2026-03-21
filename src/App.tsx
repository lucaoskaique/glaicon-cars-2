/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { ScrollToTop } from "./components/ScrollToTop";
import { HomePage } from "./pages/HomePage";
import { MotorPage } from "./pages/services/MotorPage";
import { SuspensaoPage } from "./pages/services/SuspensaoPage";
import { FreiosPage } from "./pages/services/FreiosPage";
import { DiagnosticoPage } from "./pages/services/DiagnosticoPage";
import { useState, useEffect } from "react";
import { motion } from "motion/react";



export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-bg z-100 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="w-48 h-48"
        >
          <img 
            src="/img/glaicon-cars.jpeg" 
            alt="Loading..." 
            className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(225,29,72,0.5)]"
          />
        </motion.div>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos/motor" element={<MotorPage />} />
          <Route path="/servicos/suspensao" element={<SuspensaoPage />} />
          <Route path="/servicos/freios" element={<FreiosPage />} />
          <Route path="/servicos/diagnostico" element={<DiagnosticoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
