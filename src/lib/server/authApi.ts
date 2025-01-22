"use server";

import { z } from "zod";
import { fetchApi } from "../fetchApi";

// Validation schema with Zod
const registerSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Register a user
export async function registerUser(data: z.infer<typeof registerSchema>) {
  // Validate input
  const validatedData = registerSchema.parse(data);

  // Use fetchApi for the request
  const res = await fetchApi("/api/auth/local/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: validatedData.username,
      email: validatedData.email,
      password: validatedData.password,
    }),
    // credentials: 'include' if you're using cookies
  });

  // Optionally handle response status
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData?.error?.message || "Signup failed");
  }

  return res.json();
}
