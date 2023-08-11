import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://faizalam1.github.io/MessagingApp",
  plugins: [react()],
});
