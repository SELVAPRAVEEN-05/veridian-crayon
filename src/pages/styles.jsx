
export const stylesnew = (theme) => ({
  main: {
    padding: "67px",
    width: "1306px",
    margin: "0 auto",
  },

  base: {
    height: "100%",
    width: "100%",
    overflow: "scroll",
    scrollbarWidth: "none",
  },

  mid: {
    height: "2241px",
    background: theme.palette.primary.lite,
    width: "1308px",
    overflow: "scroll",
    scrollbarWidth: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },

  first: {
    height: "540px",
    width: "1308px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    background: theme.palette.background.primary,
    marginBottom: "65px",
  },

  last: {
    height: "285px",
    width: "1308px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    position: "relative",
    background: theme.palette.background.primary,
  },

  copyrightAb: {
    height: "66px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    background: theme.palette.background.bg3,
    justifyContent: "center",
    borderTop: "2px solid #CACFDB", // i have to do this
  },

  inside: {
    height: "250px",
    width: "976px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.text.bg3,
  },

  lanka: {
    height: "200px",
    width: "976px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: theme.palette.text.bg3,
  },

  img1: {
    left: "0",
    position: "absolute",
  },

  img2: {
    right: "0",
    position: "absolute",
  },

  arrow: {
    marginTop: "8px",
    marginLeft: "7px",
  },

  Investment: {
    backgroundColor: theme.palette.secondary.yell,
    padding: "5px 10px",
    fontSize: theme.typography.fontSize.small,
    letterSpacing: "2px",
  },

  Empowering: {
    fontSize: "48px",
    textAlign: "center",
    fontFamily:'IBM_Plex_Serif',
    fontWeight: theme.typography.fontWeight.bold,
  },

  Knowmore: {
    backgroundColor: theme.palette.primary.mail,
    color: theme.palette.text.white,
    height: "52px",
    width: "189px",
    display: "flex",
    cursor: "pointer",
    fontSize: theme.typography.fontSize.extraMedium,
    fontWeight: theme.typography.fontWeight.semiBold,
    alignItems: "center",
    justifyContent: "center",
  },

  Copyright: {
    width: "1308px",
    display: "flex",
    color: theme.palette.text.tertiary,
    justifyContent: "space-between",
  },

  email: {
    height: "52px",
    width: "342px",
    backgroundColor: theme.palette.primary.mail,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontWeight: theme.typography.fontWeight.semiBold,
    fontSize: theme.typography.fontSize.large,
  },

  contact: {
    fontSize: "32px",
    fontWeight: "bold",
  },

  mail: {
    backgroundColor: theme.palette.secondary.yell,
    letterSpacing: "1px",
    color: theme.palette.text.primary,
    padding: "4px",
    fontSize: theme.typography.fontSize.verySmall,
    marginLeft: "22px",
  },

  rarrow: {
    backgroundColor: "#00000033",
    height: "52px",
    width: "43px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  About: {
    marginTop: "48px",
    marginBottom: "24px",
    color: theme.palette.text.primary,
    fontSize: "32px",
    fontWeight: "bold",
  },

  box1: {
    height: "200px",
    width: "1026px ",
    padding: "48px",
    backgroundColor: theme.palette.background.default,
    display: "flex",
  },

  phothoes: {
    marginRight: "32px",
  },

  Notes: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
});
