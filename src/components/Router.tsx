import { Route, Routes } from "react-router-dom";
import { Event } from "../pages/Event";

const Router = () => {
  return (
    <Routes>
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
};

export { Router };
