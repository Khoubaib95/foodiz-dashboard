import { useState } from "react";
import Link from "next/link";

function Form() {
  const [password, setPassword] = useState<string>("");

  return (
    <div className="max-w-lg mx-auto h-full">
      <form className="shadow overflow-hidden sm:rounded-md max-w-4xl ml-auto mr-auto">
        <div className="px-8 py-5 bg-white">
          <div className="col-span-6 sm:col-span-3 my-5">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              onChange={({ target }) => {
                setPassword(target.value);
              }}
              id="password"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex items-center mt-2">
            <input
              id="show-password"
              name="show-password"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="show-password"
              className="ml-2 block text-sm font-medium text-gray-700"
            >
              Show password
            </label>
          </div>
        </div>
        <div className=" px-4 py-3 bg-gray-50 text-right sm:px-8">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
