// src/front/components/common/Button.jsx
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  className = "",
}) {
  const classes = [
    "rise-btn",
    `rise-btn--${variant}`,
    `rise-btn--${size}`,
    fullWidth ? "rise-btn--block" : "",
    className
  ].join(" ").trim();

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
