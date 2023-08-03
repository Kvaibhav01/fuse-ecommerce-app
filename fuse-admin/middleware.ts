import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  //? List of public routes that should not require authentication. Here `/api/:path*` matches any path starting with `"/api/"` followed by any characters.
  publicRoutes: ["/api/:path*"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
