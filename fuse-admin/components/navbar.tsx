import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import Image from "next/image";

import logo from "../images/logo.svg";
import Link from "next/link";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  // Find all the stores matching the logged in user
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="border-b">
      {/* TODO: Justify space evently or update the left-right padding to be narrower. Then update padding for the body as well */}
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo of the Fuse app"
              width={80}
              height={80}
            />
          </Link>
          <StoreSwitcher items={stores} />
        </div>
        <MainNav className="mx-6" />
        <div className="flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
