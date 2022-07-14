import Link from "next/link";
import Image from "next/image";
import { Carousel } from "flowbite-react";

function NonAuthIndex() {
  return (
    <div className="px-10">
      <header
        id="non-auth-header"
        className="flex items-center justify-between pt-4"
      >
        <div className=" max-w-lg   flex items-center justify-center ">
          <Link href="/" passHref>
            <a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              <span className="text-orange-500">Foodiz</span>
              <span className="text-indigo-600">Board</span>
            </a>
          </Link>
        </div>

        <nav className="flex justify-between">
          <Link href="/auth/signin" passHref>
            <a className="px-5 m-2.5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
              Singn In
            </a>
          </Link>
          <Link href="/auth/signup">
            <a className="px-5 m-2.5 py-2.5 font-medium bg-blue-50 hover:bg-blue-100 hover:text-blue-600 text-blue-500 rounded-lg text-sm">
              Singn Up
            </a>
          </Link>
        </nav>
      </header>
      <main className="" style={{ height: "calc(100vh - 132px)" }}>
        <Carousel indicators={false}>
          <div
            style={{ backgroundColor: "rgb(243 157 0)" }}
            className="h-5/6 w-full space-x-4  flex justify-center items-center"
          >
            <img
              className="w-96 h-full "
              src="https://midabot.io/chef.2324c7ba.png"
              alt="..."
            />
            <span className="w-56 text-white h-fit font-medium ">
              Vous en avez assez des intermédiaires qui proposent des solutions
              inefficace pour atteindre vos clients?{" "}
              <span className="text-orange-500">Foodiz</span>
              <span className="text-indigo-600">Board</span> pourrait bien être
              la solution.
            </span>
          </div>
          <div
            style={{ backgroundColor: "rgb(243 157 0)" }}
            className="h-5/6 w-full space-x-4  flex justify-center items-center"
          >
            <span className="w-56 text-white h-fit font-medium ">
              <span className="text-orange-500">Foodiz</span>
              <span className="text-indigo-600">Board</span> vous permet de
              mieux gérer votre restaurant! Notre chatbot assurera la gestion de
              vos commandes, et vous permettra de vous concentrer sur ce que
              vous aimez le plus.
            </span>
            <img
              className="w-96 h-full "
              src="https://midabot.io/scooter.993cc7ca.png"
              alt="..."
            />
          </div>
          <div
            style={{ backgroundColor: "rgb(243 157 0)" }}
            className="h-5/6 w-full space-x-4  flex justify-center items-center"
          >
            <img
              className="w-96 h-full "
              src="https://midabot.io/pizza-girl.a7541158.png"
              alt="..."
            />

            <span className="w-56 text-white h-fit font-medium ">
              Vous en avez assez des intermédiaires qui proposent des solutions
              inefficace pour atteindre vos clients?{" "}
              <span className="text-orange-500">Foodiz</span>
              <span className="text-indigo-600">Board</span> pourrait bien être
              la solution.
            </span>
          </div>
        </Carousel>
      </main>
    </div>
  );
}

export default NonAuthIndex;
//sm:h-64 xl:h-80 2xl:h-96
