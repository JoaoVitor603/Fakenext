import Select from "react-select";
import { IGenderOptions } from "../../interfaces/IGenderOptions";

type props = {
  placeHolderMSG: string;
  options: IGenderOptions[];
  onClick?: () => void;
  onChange: (option: IGenderOptions) => void;
};

const CustomSelect = ({
  placeHolderMSG,
  options,

  onChange,
  onClick,
}: props) => {
  return (
    <Select
      placeholder={placeHolderMSG}
      options={options}
      onChange={(option) => !!onChange && onChange(option as IGenderOptions)}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          borderColor: state.isFocused ? "grey" : "#2388EC",
          width: 168,
          color: "red",
        }),

        singleValue: (baseStyles, state) => ({
          ...baseStyles,
          color: "#6E7E9D",
        }),
        indicatorSeparator: (baseStyle) => ({
          backgroundcolor: "#007DFA",
        }),
        dropdownIndicator: (baseStyle) => ({
          ...baseStyle,
          color: "#007DFA",
        }),
      }}
    />
  );
};

export default CustomSelect;
