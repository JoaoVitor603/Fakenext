import CustomTolltip from "../Tooltip";

type props = {
  onClick?: () => void;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  type: string;
  placeholder: string;
  value?: string | number;
  error: boolean;
  errorMessage: string;
};

const CustomInput = ({
  placeholder,
  value,
  error,
  onClick,
  type,
  errorMessage,
  onChange,
}: props) => {
  return (
    <>
      <CustomTolltip show={error} msg={errorMessage}>
        <input
          onClick={onClick}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </CustomTolltip>
    </>
  );
};
export default CustomInput;
