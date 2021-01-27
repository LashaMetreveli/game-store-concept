import style from "./Button.module.scss";
import PropTypes from "prop-types";

export default function Button({ text, onClick }) {
  return (
    <div className={styleMedia.wrapper}>
      <button className={style.button} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}

Button.protoTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
