import Footer from "../Footer";
import Navigation from "../Navigation";
import Arrow from "../Arrow";
import PropTypes from "prop-types";

export default function BasicLayout({ showFooter, children }) {
  return (
    <div>
      <Navigation />
      <Arrow />
      {children}
      {!showFooter && <Footer />}
    </div>
  );
}

BasicLayout.protoTypes = {
  showFooter: PropTypes.bool,
  children: PropTypes.any.isRequired,
};
