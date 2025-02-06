import { createStyles, keyframes } from "@mantine/emotion";

interface LoaderProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
}

const spin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

const useStyles = createStyles((theme, { size = "md", color }: LoaderProps) => {
  const sizes = {
    xs: 18,
    sm: 22,
    md: 36,
    lg: 44,
    xl: 58,
  };

  return {
    loader: {
      position: "relative",
      display: "inline-block",
      width: sizes[size],
      height: sizes[size],
    },

    spinner: {
      position: "absolute",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      border: `2px solid ${color || theme.white}`,
      borderTopColor: "transparent",
      animation: `${spin} 0.8s linear infinite`,
    },
  };
});

const Loader: React.FC<LoaderProps> = ({ size = "md", color }) => {
  const { classes } = useStyles({ size, color });

  return (
    <div className={classes.loader}>
      <div className={classes.spinner} />
    </div>
  );
};

export default Loader;
