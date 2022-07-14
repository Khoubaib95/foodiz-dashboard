import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import AuthLayout from "../PageComponents/AuthLayout";
import NonAuthIndex from "../Components/NonAuthIndex";
import MenuBar from "../Components/MenuBar";
import Footer from "../Components/Footer";
import SideBar from "../Components/SideBar";
import { InformationCircleIcon } from "@heroicons/react/solid";

function PageLayout({ children }: any) {
  const [app, setApp] = useState<any>();
  const { pathname } = useRouter();
  const { isLoggedIn, data } = useSelector((state: any) => state.user);

  useEffect(() => {
    setApp(
      <>
        {pathname.includes("auth", 1) ? (
          <AuthLayout>{children}</AuthLayout>
        ) : isLoggedIn ? (
          <div
            className="flex flex-col"
            style={{
              minHeight: "100vh",
            }}
          >
            {data && data?.emailVerification?.isVerified === true ? (
              <></>
            ) : (
              <div
                className="flex flex-col w-full p-2  text-sm text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800"
                role="alert"
              >
                <div className="flex justify-center">
                  <InformationCircleIcon className="inline flex-shrink-0 mr-3 w-5 h-5" />

                  <div className=" text-center">
                    Hello <span className="font-medium"> {data.fname}</span>{" "}
                    your email not verified yet, check your email for
                    verification
                  </div>
                </div>
              </div>
            )}
            <div
              className="flex"
              style={{
                minHeight: "100vh",
              }}
            >
              <SideBar />
              <div style={{ width: "-webkit-fill-available" }}>
                <MenuBar />
                <main
                  className="p-4"
                  style={{ width: "-webkit-fill-available" }}
                >
                  {children}
                </main>
              </div>
            </div>
          </div>
        ) : (
          <NonAuthIndex />
        )}
        <Footer />
      </>
    );
  }, [children, pathname]);

  return app;
}
export default PageLayout;

{
  /*<Toast />*/
}
{
  /*<PageSpinner />*/
}
