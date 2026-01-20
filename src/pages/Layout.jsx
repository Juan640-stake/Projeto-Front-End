import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
