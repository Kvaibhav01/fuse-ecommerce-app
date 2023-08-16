import getCategories from "@/actions/get-categories";
import MainNav from "@/components/main-nav";
import Container from "@/components/ui/container";
import Link from "next/link";
import NavbarActions from "@/components/navbar-actions";

const Navbar = async () => {
  const categories = await getCategories();

  return (
    <div className="border-b">
      <Container>
        <div className="relative flex h-16 items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="ml-4 flex gap-x-2 lg:ml-0">
            {/* TODO: Add logo here */}
            <p className="text-xl font-bold uppercase">Store</p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
