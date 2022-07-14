//import { useDropzone } from "react-dropzone";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import Spinner from "../../Components/Spinner";

function AddElementWrapper({
  setClose,
  handleSubmit,
  loading,
  error,
  message,
  children,
}: {
  setClose: any;
  handleSubmit: any;
  loading: boolean;
  error: string;
  message: string;
  children: any;
}) {
  return (
    <div className="w-full h-full relative">
      <button
        onClick={() => {
          setClose(false);
        }}
        className="absolute  inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <form
        onSubmit={handleSubmit}
        className="px-8 shadow overflow-hidden sm:rounded-md max-w-4xl ml-auto mr-auto"
      >
             <>
        <p
          className={`text-center  peer-invalid:visible text-red-500 block text-sm font-medium`}
        >
          {error}
        </p>
        <p
          className={`text-center  peer-invalid:visible text-green-500 block text-sm font-medium`}
        >
          {message}
        </p>
      </>
        {children}
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {loading ? <Spinner /> : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddElementWrapper;
