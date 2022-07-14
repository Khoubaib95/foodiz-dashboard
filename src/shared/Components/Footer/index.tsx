import Link from "next/link";
function Footer() {
  return (
    <footer className="bg-gray-200 text-center lg:text-left">
      <div className="text-gray-600 text-center p-4">
        © 2022 Copyright{" "}
        <Link href="/" passHref>
          <a className="text-gray-800">
            <span className="text-orange-500">Foodiz</span>
            <span className="text-indigo-600">Board</span>
          </a>
        </Link>
      </div>
    </footer>
  );
}
export default Footer;
