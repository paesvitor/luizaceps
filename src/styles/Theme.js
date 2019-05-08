const config = {
  font: {
    size: 1
  }
};

export default {
  colors: {
    primary: "#4b9aff",
    primaryDarker: "#1d7ef9",
    secondary: "#10a3c1",
    success: "#73d08c",
    warning: "#ffce5a",
    info: "#00B0FF",
    danger: "#ff3636",
    white: "#fff",
    light: "#C4C4C4",
    lighter: "#EEEEEE",
    dark: "#4C4C4C",
    black: "#000"
  },

  borderRadius: "3px",

  font: {
    xs: `${config.font.size * 0.75}rem`,
    sm: `${config.font.size * 0.85}rem`,
    md: `${config.font.size * 1}rem`,
    lg: `${config.font.size * 1.5}rem`,
    xl: `${config.font.size * 2}rem`,
    xxl: `${config.font.size * 2.5}rem`
  },

  spacing: {
    xs: ".25rem",
    sm: ".5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "3rem",
    xxl: "5rem"
  }
};
