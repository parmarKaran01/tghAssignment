import React, { useEffect, useState } from "react";
import { baseURL } from "../constants";
import downarrow from "../assets/downarrow.svg"
import uparrow from "../assets/uparrow.svg"

const Dropdown = ({ selectedTag, setSelectedTag }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [optionArr, setOptionArr] = useState([]);
  
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const getTags = async () => {
    try {
      const res = await fetch(`${baseURL}/tags`);
      const data = await res.json();
      setOptionArr(data);
      console.log("tags", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getTags();

  }, []);

  const handleSelect = (tag) => {
    setSelectedTag(tag);
    setIsOpen(false);
  };
  console.log("selected", selectedTag);
  return (
    <div
      className="mt-[3rem] min-w-[200px] bg-[#D9D9D9] rounded-[30px] p-2 px-6 shadow-lg text-slate-900"
      onClick={toggle}
    >
      <div value={selectedTag} className="flex items-center h-6 relative">
        <span>{selectedTag}</span>
        <img src={ isOpen ? uparrow : downarrow } alt="downIcon" className="w-4 h-4 absolute right-1"/>
      </div>
      {isOpen ? (
        <ul className="mt-4 max-h-[200px] overflow-y-scroll">
          <li
            className="text-slate-900 h-12 hover:text-slate-800"
            value={""}
            onClick={() => handleSelect(null)}
          >
            None
          </li>
          {optionArr.map((item) => {
            return (
              <li
                key={item._id}
                value={item.name}
                className="text-slate-900 h-12 hover:text-slate-800"
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default Dropdown;
