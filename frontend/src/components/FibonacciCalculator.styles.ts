import CSS from "csstype";

export const boxDiv: CSS.Properties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "5px",
  boxShadow: "1.5px 1.5px 1.5px 1.5px rgba(0,0,0,0.1)",
  padding: "2rem 3rem 2rem 3rem",
  backgroundColor: "white",
};

export const card: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
  color: "#ddd",
  maxWidth: "80%",
};

export const cardForm: CSS.Properties = {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};
export const fibInput: CSS.Properties = {
  display: "flex",
  height: "30px",
  width: "40%",
  color: "#b7b7b7",
};

export const fibButton: CSS.Properties = {
  display: "flex",
  height: "36px",
  width: "40%",
};

export const fibResult: CSS.Properties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100%",
  margin: "1rem",
};
