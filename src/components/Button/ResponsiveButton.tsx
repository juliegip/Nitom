import React from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

interface ResponsiveButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "text" | "contained" | "outlined";
  to?: string;
}

const ResponsiveButton: React.FC<ResponsiveButtonProps> = ({
  variant,
  to,
  children,
  ...props
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
    }
  };

  return (
    <Button
      {...props}
      variant={variant}
      onClick={handleClick}
      sx={{
        ...props.sx,
        fontSize: { xs: "1rem", sm: "1.2rem" },
        padding: { xs: "6px 12px", sm: "8px 16px" },
        minHeight: { xs: "48px", sm: "48px" },
      }}
    >
      {children}
    </Button>
  );
};

export default ResponsiveButton;