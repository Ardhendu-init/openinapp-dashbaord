import React from "react";

const Select = () => {
  //       // Initialize state to manage the selected option
  //   const [selectedOption, setSelectedOption] = useState("");

  //   // Function to handle changes when an option is selected
  //   const handleOptionChange = (event: any) => {
  //     setSelectedOption(event.target.value);
  //   };
  return (
    <div>
      {" "}
      <select
        id="dropdown"
        // value={selectedOption}
        // onChange={handleOptionChange}
        className="bg-transparent  border-none focus:outline-none "
      >
        <option value="option1">May - June 2021</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default Select;
