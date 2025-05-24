import { queryClient } from "../utils/queryClient";
import AppRoutes from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
