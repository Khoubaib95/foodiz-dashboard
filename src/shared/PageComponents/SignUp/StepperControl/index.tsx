import Link from "next/link";

export default function StepperControl({
  handleClick,
  currentStep,
  isValid,
  handleSubmit,
}: any) {
  return (
    <div className="flex justify-between bg-gray-50 text-right sm:p-4">
      {currentStep === 1 ? (
        <div className="flex items-center">
          <span className="block text-sm font-medium text-gray-700">
            {`Do you have an account ?`}
          </span>
          <Link href="/auth/signin" passHref>
            <a className="ml-2 font-medium text-indigo-600 hover:text-indigo-500">
              Sign In
            </a>
          </Link>
        </div>
      ) : (
        <button
          onClick={() => handleClick()}
          className={
            "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          }
        >
          Back
        </button>
      )}

      {currentStep === 1 ? (
        <button
          onClick={() => handleClick("next")}
          //disabled={isValid}
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            "" //isValid ? "" : "cursor-not-allowed opacity-50 "
          }`}
        >
          Next
        </button>
      ) : currentStep === 2 ? (
        <button
          onClick={() => {
            handleClick("next");
            handleSubmit();
          }}
          className={`inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            "" // currentStep === 2 ? " cursor-not-allowed opacity-50 " : ""
          }`}
          type="submit"
        >
          Submit
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
