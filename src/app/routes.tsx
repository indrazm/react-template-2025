import { BrowserRouter, Routes, Route } from "react-router";
import { ExamplePage } from "@/features/exampleFeature";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ExamplePage />} />
      </Routes>
    </BrowserRouter>
  );
}
