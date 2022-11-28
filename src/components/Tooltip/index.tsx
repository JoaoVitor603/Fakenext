import style from "./style.module.scss";

type props = {
  msg: string;
  show: boolean;
  children: React.ReactNode;
};

const CustomTooltip = ({ msg, children, show }: props) => (
  <div>
    <div className={style.mainContainer}>
      {show && (
        <div className={style.wrapper}>
          <span className={style.container}>
            <p>{msg}</p>
          </span>
          <span className={style.arrow} />
        </div>
      )}
      {children}
    </div>
  </div>
);

export default CustomTooltip;
