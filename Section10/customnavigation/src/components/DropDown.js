import { useState } from "react";
const DropDown = ({ options, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handeClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false);
    console.log(option);
    onSelect(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={() => handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <>
      <div onClick={handeClick}>{selection?.label || "Select ..."}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </>
  );
};

export default DropDown;
