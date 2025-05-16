import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "./layout";
import HomePage from "./pages/home";
import BookTable from "./pages/booking";
import OurMenu from "./pages/menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="booking" element={<BookTable />} />
          <Route path="menu" element={<OurMenu />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
