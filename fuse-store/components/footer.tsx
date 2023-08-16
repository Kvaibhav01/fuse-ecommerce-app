const Footer = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} FUSE Store Inc. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
