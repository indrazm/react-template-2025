import ky from "ky";
import { getAuthToken } from "../libs/authToken";

const API_BASE_URL = import.meta.env.VITE_API_URL;

export const api = ky.create({
  prefixUrl: API_BASE_URL,
  timeout: 120000,
  hooks: {
    beforeRequest: [
      async (request) => {
        const token = getAuthToken();
        if (token) {
          request.headers.set("Authorization", `Bearer ${token}`);
        }
      },
    ],
    afterResponse: [
      async (_, __, response) => {
        if (response.status === 401 || response.status === 403) {
          console.warn("Unauthorized or forbidden access detected.");
          return;
        }

        if (!response.ok) {
          try {
            const data = (await response.json()) as { error?: string };
            console.error("API Error:", data.error);
            throw new Error(data.error || "An unknown error occurred.");
          } catch (jsonError) {
            console.error("Failed to parse error response:", jsonError);
            throw new Error("Failed to parse error response.");
          }
        }

        return response;
      },
    ],
  },
});
