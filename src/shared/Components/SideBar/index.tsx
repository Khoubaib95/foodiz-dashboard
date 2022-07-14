import { useState } from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";
import { Tooltip } from "flowbite-react";
import { HomeIcon } from "@heroicons/react/outline";
import { DocumentTextIcon } from "@heroicons/react/outline";
import { ShoppingBagIcon } from "@heroicons/react/outline";
import SelectCategoryModal from "../../Components/SelectCategoryModal";

import {
  setSelectedRestaurant,
  getSelectedRestaurant,
} from "../../../utils/utils";

const iconsClassName =
  "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";

const linksClassName = (active: boolean) =>
  `${
    active ? "bg-gray-200 " : "hover:bg-gray-100 "
  }w-11/12 ml-auto mr-auto flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700`;

function SideBar() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const user = useSelector((state: any) => state.user);
  const { pathname, push } = useRouter();

  return (
    <aside className="z-10 w-64 bg-gray-50 drop-shadow-xl" aria-label="Sidebar">
      <div className="py-8 h-10 max-w-lg bg-gray-100 mx-auto flex items-center justify-center ">
        <Link href="/" passHref>
          <a className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            <span className="text-orange-500">Foodiz</span>
            <span className="text-indigo-600">Board</span>
          </a>
        </Link>
      </div>
      <ul className="space-y-2 mt-2">
        <li>
          <div
            onClick={() => {
              setOpenModal(true);
            }}
            className={`${linksClassName(
              pathname.includes("restaurant", 1)
            )} hover:cursor-pointer`}
          >
            <HomeIcon className={iconsClassName} />
            <span className="ml-3">Select Restaurant</span>
          </div>
          <SelectCategoryModal
            title="Select Restaurant"
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
            {user?.data?.restaurants?.list.map(
              (restaurant: { name: string; _id: string; image: string }) => (
                <div key={restaurant._id}>
                  <div
                    onClick={() => {
                      setSelectedRestaurant(restaurant._id);
                      setOpenModal(false);
                      push(`/restaurant/${restaurant._id}`);
                    }}
                    className="p-4 flex items-center hover:bg-indigo-100 cursor-pointer"
                  >
                    <img
                      src={restaurant.image}
                      style={{ height: 120, width: 120 }}
                    />
                    <p className="ml-5 text-lg"> {restaurant.name}</p>
                  </div>
                </div>
              )
            )}
          </SelectCategoryModal>
        </li>
        <li>
          {pathname !== "/" ? (
            <Link href={`/menu/${getSelectedRestaurant()}`} passHref>
              <a className={linksClassName(pathname.includes("menu", 1))}>
                <DocumentTextIcon className={iconsClassName} />
                <span className="ml-3">Menu</span>
              </a>
            </Link>
          ) : (
            <div className="flex ml-4">
              <Tooltip
                content="Please select a restaurant first"
                placement="right"
              >
                <div style={{ width: 150 }} className={`h-8 flex`}>
                  <DocumentTextIcon className={`${iconsClassName} `} />
                  <span className="ml-3">Menu</span>
                </div>
              </Tooltip>
            </div>
          )}
        </li>
        <li>
          {pathname !== "/" ? (
            <Link href={`/products/${getSelectedRestaurant()}`} passHref>
              <a className={linksClassName(pathname.includes("products", 1))}>
                <ShoppingBagIcon className={iconsClassName} />
                <span className="ml-3">Products</span>
              </a>
            </Link>
          ) : (
            <div className="flex ml-4">
              <Tooltip
                content="Please select a restaurant first"
                placement="right"
              >
                <div style={{ width: 150 }} className={`h-8 flex`}>
                  <ShoppingBagIcon className={iconsClassName} />
                  <span className="ml-3">Products</span>
                </div>
              </Tooltip>
            </div>
          )}
        </li>
      </ul>
    </aside>
  );
}
export default SideBar;
/**
    <div className="flex justify-center">
              <Tooltip
                content="Please select a restaurant first"
                placement="right"
              >
                <div style={{ width: 150 }} className={`h-8 flex`}>
                  <ShoppingBagIcon className={iconsClassName} />
                  <span className="ml-3">Products</span>
                </div>
              </Tooltip>
            </div>
 */
