export const stylesnew = (theme) => ({
  main: {
    height: "100%",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    background: theme.palette.background.default,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  head: {
    height: "120px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderBottom: "2px solid #CACFDB",     // i have to change it
  },

  body: {
    height: "85%",
    width: "100vw",
    overflowY: "scroll",
    scrollbarWidth: "none",
  },
});
