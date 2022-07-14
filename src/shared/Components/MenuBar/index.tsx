import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Dropdown, Avatar } from "flowbite-react";
import { dispatchSignOutUser } from "../../../redux/user/dispatch";
import { removeLocalAccessToken } from "../../../utils/utils";

function signOutUser(push: any) {
  dispatchSignOutUser();
  push("/");
  removeLocalAccessToken();
}

const NavBar = () => {
  const user = useSelector((state: any) => state.user);
  const { push } = useRouter();
  return (
    <nav className="drop-shadow-md p-3 bg-gray-50">
      <div className="flex justify-end md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt={user.data && user.data.name}
              img={user.data && user.data.image}
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">
              {user.data && `${user.data.fname} ${user.data.lname}`}
            </span>
            <span className="block truncate text-sm font-medium">
              {user?.data?.email}
            </span>
          </Dropdown.Header>

          <Dropdown.Item
            onClick={() => {
              signOutUser(push);
            }}
          >
            Sign out
          </Dropdown.Item>
        </Dropdown>
      </div>
    </nav>
  );
};
export default NavBar;
