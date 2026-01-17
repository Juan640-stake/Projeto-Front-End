import { Link } from "react-router-dom";
import Logo from "../Logo/logo.jsx";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Logo />

      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/produtos" className="nav-link">Produtos</Link>
        <Link to="/categorias" className="nav-link">Categorias</Link>
        <Link to="/meus-pedidos" className="nav-link">Meus Pedidos</Link>
      </nav>
    </header>
  );
};

export default Header;
