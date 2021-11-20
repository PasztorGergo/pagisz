function Button(props) {
  return (
    <button className={props.textColor + " " + " " + props.color}>
      {props.text}
    </button>
  );
}

export default Button;
