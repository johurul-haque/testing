import { useContext } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useTitle from "../hooks/useTitle";
import { AuthContext } from "../provider/Authentication";

const Root = () => {
  useTitle("");
  const { loading } = useContext(AuthContext);

  return (
    <>
      <Header />
      <main
        className={`${
          loading && "mt-1 flex items-center justify-center"
        } w-full flex-1`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Root;
