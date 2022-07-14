import store from "../../store";
import { signOutUser, addNewRestaurant } from "../reducer";
import { signInUser } from "../action";

export const dispatch = store.dispatch;

// User Dispatcher
export const dispatchSignInUser = ({
  email,
  password,
}: {
  email: any;
  password: any;
}) => {
  //@ts-ignore
  dispatch(signInUser({ email, password }));
};

export const dispatchAddNewRestaurant = (restaurant: any) => {
  dispatch(addNewRestaurant(restaurant));
};

export const dispatchSignOutUser: () => void = () => {
  dispatch(signOutUser());
};
