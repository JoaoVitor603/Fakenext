import logoHeader from "./../../imgs/anexth-principal.svg";
import logoUser from "./../../imgs/iconUser.svg";
import style from "./style.module.scss";

const Header: React.FC = () => {
  return (
    <header className={style.container}>
      <nav>
        <span>
          <img src={logoHeader} alt="Next Logo" />
        </span>
      </nav>
      <nav className={style.navContainer}>
        <ul>
          <li>Home</li>

          <li>Prescrições</li>

          <li>Teleconsulta</li>

          <li>Fale Conosco</li>
        </ul>
        <span className={style.user}>
          <img src={logoUser} alt="User Logo" />
          Dr Caio Rocha
        </span>
      </nav>
    </header>
  );
};

export default Header;
