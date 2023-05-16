import { Link } from "react-router-dom";
const Button = ({ typeButton, colorButton, content, route }) => {
  return (
    <button
      className={`btn ${colorButton || "btn-primary"} text`}
      type={typeButton || ""}
    >
      {route ? <Link to={route}>{content}</Link> : <>{content}</>}
    </button>
  );
};

export default Button;
