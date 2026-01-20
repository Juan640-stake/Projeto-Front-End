import { Link } from "react-router-dom";
import Logo from "../Logo/logo.jsx";
import "./Footer.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <Logo />
          <p>A Digital Store é um projeto criado por dois entusiastas da tecnologia. Aproveite a navegação e vamos às compras!</p>
        </div>

        <div className="footer-section">
          <h3>Informação</h3>
          <ul>
            <li><Link to="/about">Sobre Drip Store</Link></li>
            <li><Link to="/security">Segurança</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Categorias</h3>
          <ul>
            <li><Link to="/camisetas">Camisetas</Link></li>
            <li><Link to="/calcas">Calças</Link></li>
            <li><Link to="/tenis">Tênis</Link></li>
          </ul>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© {currentYear} Digital Store</p>
      </div>
    </footer>
  );
};

export default Footer;
