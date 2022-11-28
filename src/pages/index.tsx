import Header from "../components/Header";
import Form from "../components/Form";
import searchIcon from "./../imgs/search.svg";
import style from "./style.module.scss";
const Home: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className={style.container}>
        <div className={style.containerSection}>
          <span className={style.prescritionContainer}>
            <h1 className={style.title}>Prescrições</h1>
            <hr />
          </span>
          <span className={style.textContainer}>
            <h2>Encontre um paciente para prescrever:</h2>
            <p>
              Aqui você pode buscar por E-mail ou CPF para encontrar o paciente
              e começar a montar a sua prescrição
            </p>
          </span>
          <span className={style.searchContainer}>
            <input />

            <button type="button" onClick={() => alert("Não implementado")}>
              <img alt="Search Icon" src={searchIcon} />
            </button>
          </span>
        </div>
        <span className={style.containerForm}>
          <Form />
        </span>
      </main>
    </>
  );
};

export default Home;
