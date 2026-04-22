import { Fragment, ReactNode } from "react";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";

interface PropTypes {
  children: ReactNode;
}

const LandingPageLayout = (props: PropTypes) => {
  const { children } = props;

  return (
    <Fragment>
      <Navbar />
      <div className="">{children}</div>
      <Footer />
    </Fragment>
  );
};

export default LandingPageLayout;
