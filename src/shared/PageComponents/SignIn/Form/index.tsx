import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { dispatchSignInUser } from "../../../../redux/user/dispatch";
import TextField from "../../../Components/TextField";
import Spinner from "../../../Components/Spinner";

// Yup Config
const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(3, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

function Form() {
  const user = useSelector((state: any) => state.user);
  const { push } = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      showPassword: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatchSignInUser({
        email: values.email,
        password: values.password,
      });
    },
  });
  useEffect(() => {
    if (user.isLoggedIn) {
      push("/");
    }
  }, [user.isLoggedIn, push]);
  return (
    <div className="max-w-lg mx-auto h-full">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-white shadow overflow-hidden sm:rounded-md max-w-4xl ml-auto mr-auto"
      >
        <div className="px-8 py-5 ">
          <p
            className={`text-center h-5 peer-invalid:visible text-red-700 block text-sm font-medium`}
          >
            {user.error}
          </p>
          <TextField
            id="email"
            name="email"
            type="text"
            label="Email"
            placeholder="name@foodizboard.com"
            required
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email && Boolean(formik.errors.email)
                ? formik.errors.email
                : ""
            }
          />
          <TextField
            id="password"
            name="password"
            type={formik.values.showPassword ? "text" : "password"}
            label="Password"
            required
            value={formik.values.password}
            onChange={formik.handleChange}
            error={
              formik.touched.password && Boolean(formik.errors.password)
                ? formik.errors.password
                : ""
            }
          />
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center h-5 ">
              <input
                id="terms"
                type="checkbox"
                defaultChecked={formik.values.showPassword}
                name="showPassword"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                onChange={formik.handleChange}
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm font-medium text-gray-700"
              >
                Show password
              </label>
            </div>

            <div className="text-sm">
              <Link href="forgot-password" passHref>
                <a
                  href="#"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Forgot your password?
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4 py-3 bg-gray-50 text-right sm:px-8">
          <div className="flex items-center">
            <span className="block text-sm font-medium text-gray-700">
              {`Don't have an account ?`}
            </span>
            <Link href="/auth/signup" passHref>
              <a className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
                Register
              </a>
            </Link>
          </div>
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {user.loading ? <Spinner /> : "Sign In"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
