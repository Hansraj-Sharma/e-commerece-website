import React, { useState } from "react";
import styles from "./style.module.css";
import ArrowIcon from "../../icons/arrowIcon";

const Select = ({ option, keyName, placeholder, ImgName, ifTrue }) => {
  const [isOpen, setIsOpen] = useState(ifTrue || false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (option) => {
    setSelectedOption(option);
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.custom_select}>
      <div className={styles.cs_label} onClick={handleToggle}>
        {option.ImgName && (
          <img src={selectedOption ? selectedOption.imgUrl : ""} alt={""} />
        )}
        <span>{selectedOption ? selectedOption.title : placeholder}</span>
        <ArrowIcon />
      </div>
      {isOpen && (
        <div className={styles.cs_options}>
          {option.map((option, index) => (
            <div
              key={index}
              className={styles.cs_option}
              onClick={() => {
                handleChange(option);
              }}>
              <img src={option[ImgName]} alt={""} />
              <span> {option[keyName]}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
