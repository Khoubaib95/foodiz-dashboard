import { useState } from "react";
import Link from "next/link";

function Form() {
  const [email, setEmail] = useState<string>("");

  return (
    <div className="max-w-lg mx-auto h-full">
      <form className="shadow overflow-hidden sm:rounded-md max-w-4xl ml-auto mr-auto">
        <div className="px-8 py-5 bg-white">
          <div className="col-span-6 sm:col-span-3 my-5">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              onChange={({ target }) => {
                setEmail(target.value);
              }}
              id="email"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="name@foodizboard.com"
              required
            />
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
