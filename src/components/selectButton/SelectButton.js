import { Box } from "@mui/material";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <Box
      sx={{
        borderRadius: "5px",
        padding: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#007fff" : "",
        border: !selected ? "2px solid white" : "",
        fontWeight: selected ? 700 : 500,
        "&:hover": {
          border: "2px solid #007fff",
        },
        width: "22%",
      }}
      onClick={onClick}
    >
      {children}
    </Box>
  );
};

export default SelectButton;
