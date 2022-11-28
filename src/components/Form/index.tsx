import { DatePicker, DatePickerProps } from "antd";
import { useState } from "react";
import type { Dayjs } from "dayjs";
import locale from "antd/es/date-picker/locale/pt_BR";
import CustomInput from "../input";
import CustomSelect from "../Select";
import style from "./style.module.scss";
import {
  isValidEmail,
  isValidMobilePhone,
} from "@brazilian-utils/brazilian-utils";
import CustomTooltip from "../Tooltip";
import Modal from "../Modal";
import ModalConfirm from "../ModalConfirm";

const Form: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [gender, setGender] = useState("");
  const [date, setDate] = useState<string | Dayjs>();

  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorPhone, setErrorPhone] = useState<boolean>(false);
  const [errorGender, setErrorGender] = useState<boolean>(false);
  const [errorDate, setErrorDate] = useState<boolean>(false);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const options = [
    { value: "Masculino", label: "Masculino" },
    { value: "Feminino", label: "Feminino" },
    { value: "Prefiro não dizer", label: "Prefiro não dizer" },
    { value: "Outro", label: "Outro" },
  ];

  const validateFields = (): boolean => {
    let validate = true;

    if (!name) {
      validate = false;
      setErrorName(true);
    }
    if (!email || !isValidEmail(email)) {
      validate = false;
      setErrorEmail(true);
    }
    if (!phone || !isValidMobilePhone(phone)) {
      validate = false;
      setErrorPhone(true);
    }
    if (!gender) {
      validate = false;
      setErrorGender(true);
    }
    if (!date) {
      validate = false;
      setErrorDate(true);
    }
    return validate;
  };

  const handleChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDate(dateString);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateFields()) {
      setShowModal(true);
    }
  };

  return (
    <span className={style.container}>
      <div className={style.containerText}>
        <h3 className={style.title}>Convidar um novo paciente </h3>
        <p className={style.text}>
          Ao enviar um convite para o paciente se cadastrar, você pode montar
          uma prescrição que ele vai receber no momento que se cadastrar.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.containerInput}>
          <CustomInput
            placeholder={"Nome"}
            value={name}
            type="text"
            onChange={(e) => {
              setErrorName(false);
              setName(e.target.value);
            }}
            onClick={() => setErrorName(false)}
            errorMessage="Por favor, preencha um nome."
            error={errorName}
          />
          <CustomInput
            placeholder={"E-mail"}
            value={email}
            type="text"
            onChange={(e) => {
              setErrorEmail(false);
              setEmail(e.target.value);
            }}
            onClick={() => setErrorEmail(false)}
            errorMessage="E-mail inválido, insira um e-mail válido para continuar."
            error={errorEmail}
          />

          <CustomInput
            placeholder={"Celular"}
            value={phone}
            onChange={(e) => {
              setErrorPhone(false);
              setPhone(e.target.value);
            }}
            onClick={() => setErrorPhone(false)}
            type="number"
            errorMessage="Celular inválido, insira um número válido para continuar."
            error={errorPhone}
          />
        </div>
        <div className={style.containerTooltip}>
          <CustomTooltip
            show={errorGender}
            msg={"Por favor, preencha uma data."}
          >
            <CustomSelect
              options={options}
              placeHolderMSG={"Gênero"}
              onChange={(option) => {
                setGender(option.value);
                setErrorGender(false);
              }}
            />
          </CustomTooltip>
          <CustomTooltip show={errorDate} msg={"Por favor, preencha uma data."}>
            <DatePicker
              locale={locale}
              format="DD/MM/YYYY"
              onClick={() => setErrorDate(false)}
              onChange={handleChange}
            />
          </CustomTooltip>
        </div>
        <button className={style.sendButton} type="submit">
          Enviar Convite
        </button>
      </form>
      {showModal && (
        <Modal
          name={name}
          email={email}
          onConfirm={() => {
            setShowModal(false);
            setShowConfirm(true);
          }}
          onClose={() => setShowModal(false)}
        />
      )}
      {showConfirm && (
        <ModalConfirm
          name={name}
          email={email}
          onClose={() => setShowConfirm(false)}
        />
      )}
    </span>
  );
};
export default Form;
