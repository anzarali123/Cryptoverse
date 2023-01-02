const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      style={{
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",
        backgroundColor: selected ? "#007fff" : "",
        border: !selected ? "2px solid white" : "",
        fontWeight: selected ? 700 : 500,
        width: "22%",
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
};

export default SelectButton;
