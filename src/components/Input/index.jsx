import style from "./Input.module.scss";
import PropTypes from "prop-types";

export default function Input({
  placeholder,
  type,
  onChange,
  margin,
  inputMode,
  pattern,
}) {
  return (
    <input
      style={{ margin: `${margin}` }}
      inputMode={inputMode}
      pattern={pattern}
      className={style.input}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
    />
  );
}

Input.protoTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  margin: PropTypes.string,
  inputMode: PropTypes.string,
  pattern: PropTypes.string,
};
