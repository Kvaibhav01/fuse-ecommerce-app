import { authMiddleware } from "@clerk/nextjs";

// This protects all routes including `api/trpc` routes
export default authMiddleware({});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
