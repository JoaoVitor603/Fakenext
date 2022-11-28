import style from "./style.module.scss";

type props = {
  name: string;
  email: string;
  onClose: () => void;
};
const ModalConfirm = ({ name, email, onClose }: props) => {
  return (
    <div className={style.background}>
      <div className={style.modalContainer}>
        <div className={style.header}>
          <button className={style.closeButton} onClick={() => onClose()}>
            x
          </button>
        </div>
        <span>
          <p className={style.text}>Você convidou: </p>
        </span>
        <div className={style.guestName}>
          <h2>{name}</h2>
          <p className={style.guestEmail}>{email} </p>
        </div>

        <span>
          <button
            className={style.confirmButton}
            onClick={() => alert("Função não implementada")}
          >
            CADASTRAR PRESCRIÇÃO
          </button>
        </span>
      </div>
    </div>
  );
};
export default ModalConfirm;
