//import Toast from "../Components/Toast";

function AuthLayout({ children }: any) {
  return (
    <main
      className="bg-gray-50 w-full h-full pb-7"
      style={{ minHeight: "calc( 100vh - 56px)" }}
    >
      <div className="py-8 h-10 max-w-lg  mx-auto flex items-center justify-center ">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <span className="text-orange-500">Foodiz</span>
          <span className="text-indigo-600">Board</span>
        </span>
      </div>
      {children}
    </main>
  );
}
export default AuthLayout;
