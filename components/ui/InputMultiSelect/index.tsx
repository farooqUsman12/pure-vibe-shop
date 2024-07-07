// /* eslint-disable react/prop-types */
// import React, { useState } from "react";

// const InputMultiSelect = ({ placeholder }) => {
//   const [tags, setTags] = useState([]);

//   const addTag = (e) => {
//     if (e.key === "Enter" && e.target.value.trim() !== "") {
//       setTags([...tags, e.target.value.trim()]);
//       e.target.value = "";
//     } else if (
//       e.key === "Backspace" &&
//       e.target.value === "" &&
//       tags.length > 0
//     ) {
//       // Remove the last tag when Backspace is pressed and the input is empty
//       setTags(tags.slice(0, tags.length - 1));
//     }
//   };

//   return (
//     <div className="mb-3 min-h-24 rounded-xl border-2 p-3">
//       <div className="text-[#828282]">{placeholder}</div>
//       <div className="flex flex-wrap">
//         {tags.map((tag, idx) => (
//           <div
//             className="m-1 rounded-lg border-2 p-1 text-black"
//             key={idx}
//           >
//             {tag}
//           </div>
//         ))}
//         <input
//           type="text"
//           onKeyUp={addTag}
//           className="flex-1  border-none text-black outline-none"
//         />
//       </div>
//     </div>
//   );
// };

// export default InputMultiSelect;
