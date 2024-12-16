export const stylesnew = (theme) => ({
  head: {
    height: "100%",
    width: "1440px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  tabs: {
    "& .MuiTabs-indicator": {
      background: theme.palette.background.primary,
      borderRadius: "20px",
      height: "3px",
    },
    minHeight: "0",
  },

  tab: {
    color: theme.palette.text.secondary,
    "&.Mui-selected": {
      color: theme.palette.primary.main,
    },
    textTransform: "none",
    alignItems: "start",
    justifyContent: "start",
    marginRight: "32px",
    minHeight: "32px",
    minWidth: "0",
    padding: "0",
    fontSize: theme.typography.fontSize.extraMedium,
    fontWeight: theme.typography.fontWeight.bold,
  },

  img: {
    position: "absolute",
    left: "67px",
  },
});
