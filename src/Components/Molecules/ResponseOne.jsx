import React, { useState } from "react";


export default function ResponseOne({
  title,
  options,
  handleOptionChange,
  questions,
}) {
  const [optionsState, setOptionsState] = useState(options);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelection = (optionName) => {
    const newOptions = optionsState.map((option) => {
      if (optionName === option.name) {
        return { ...option, checked: option.checked + 1 };
      } else if (selectedOption === option.name) {
        return { ...option, checked: option.checked - 1 };
      } else {
        return option;
      }
    });

    setSelectedOption(optionName);
    setOptionsState(newOptions);
    console.log("handleOptionSelection newOptions", newOptions);
    handleOptionChange(questions, newOptions);
  };



  return (
    <>
      <div className="border-b-[1px] border-black/20 mb-10">
        <h6 className="font-bold pb-5 ">
          <span>{title}</span>
        </h6>
        <div className="px-6">
          {optionsState.map((option, index) => (
            <div key={index} className="flex items-center mb-5">
              <input
                type="radio"
                name={`question-${title}`}
                onChange={() => handleOptionSelection(option.name)}
              />
              <label className="ms-2 text-sm font-medium">{option.name}</label>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

