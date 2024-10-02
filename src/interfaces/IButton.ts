interface IButton {
  text?: string;
  type?: "default" | "reverse" | "gradient" | "blank";
  onClick?: () => void;
}

export default IButton;
