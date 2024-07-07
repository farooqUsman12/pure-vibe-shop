// /* eslint-disable react/prop-types */
// import React, { useState } from 'react';

// const Select = ({options,className}) => {
//   // State to manage the selected value
//   const [selectedValue, setSelectedValue] = useState('');

//   // Event handler for when the selected value changes
//   const handleSelectChange = (event) => {
//     setSelectedValue(event.target.value);
//   };

//   return (
//     <div>
//       <select id="dropdown" className={`w-full rounded-xl outline-none ${className}`} value={selectedValue} onChange={handleSelectChange}>
//         {options?.map((option, index) => (
//           <option key={index} value={option}>
//             {option}
//           </option>
//         ))??[]}
//       </select>
//     </div>
//   );
// };

// export default Select;
