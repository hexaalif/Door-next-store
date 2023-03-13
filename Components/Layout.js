import Link from "next/link";
import React from "react";
import Header from "./Header";

const Layout = ({ children }) => {
  // const [nav, setNav] = useState(false);
  // const [clr, setClr] = useState("transparent");
  // const [txtclr, setTxtclr] = useState("white");

  // const handleNav = () => {
  //   setNav(!nav);
  // };

  // useEffect(() => {
  //   const changeClr = () => {
  //     if (window.scrollY >= 90) {
  //       setClr("#ffffff");
  //       setTxtclr("#000000");
  //     } else {
  //       setClr("transparent");
  //       setTxtclr("#ffffff");
  //     }
  //   };
  //   window.addEventListener("scroll", changeClr);
  // }, []);
  return (
    <div>
      <div className="flex min-h-screen flex-col justify-between text-center">
        <header className="">
          {/* <Header /> */}
          <h1>Header</h1>
        </header>
        <main>{children}</main>
        <footer>footer</footer>
      </div>
    </div>
  );
};

export default Layout;
