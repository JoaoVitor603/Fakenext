import style from "./style.module.scss";

type props = {
  name: string;
  email: string;
  onClose: () => void;
  onConfirm: () => void;
};
const Modal = ({ name, email, onClose, onConfirm }: props) => {
  return (
    <div className={style.background}>
      <div className={style.modalContainer}>
        <div className={style.header}>
          <button className={style.closeButton} onClick={() => onClose()}>
            x
          </button>
        </div>
        <span>
          <p className={style.text}>Você está convidando: </p>
        </span>
        <div className={style.guestName}>
          <h2>{name}</h2>
          <p className={style.guestEmail}>{email} </p>
        </div>
        <span>
          <p className={style.confirmText}>Confirma o envio do convite? </p>
        </span>
        <span>
          <button className={style.confirmButton} onClick={onConfirm}>
            ENVIAR CONVITE
          </button>
        </span>
        <span className={style.containerReturnButton}>
          <button
            className={style.returnButton}
            type="button"
            onClick={() => onClose()}
          >
            Editar Informações
          </button>
        </span>
      </div>
    </div>
  );
};
export default Modal;
