import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Battle } from "./Battle";

export function Content() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </>
  );
}
