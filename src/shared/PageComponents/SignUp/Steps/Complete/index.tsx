import Spinner from "../../../../Components/Spinner";
function Complete({
  loading,
  error,
  message,
}: {
  loading: boolean;
  error: string;
  message: string;
}) {
  return (
    <div
      className="m-auto flex items-center justify-center"
      style={{ height: 100 }}
    >
      <div className="my-auto">
        {!loading ? (
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
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
}

export default Complete;
