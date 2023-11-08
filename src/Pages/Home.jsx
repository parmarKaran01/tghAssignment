import React, { useEffect, useState } from "react";
import { baseURL } from "../constants";
import Quote from "../components/Quote";
import Dropdown from "../components/Dropdown";

const Button = ({ onClick }) => {
  return (
    <button
      className="px-8 py-2 bg-[#009C51] shadow-md rounded-[30px] mt-[2rem]"
      onClick={onClick}
    >
      Next Quote
    </button>
  );
};

const Home = () => {
  const [quote, setQuote] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  const getRandomQuote = async () => {
    try {
      const res = await fetch(
        `${baseURL}/random${selectedTag !==null ? `?tags=${selectedTag}` : ""}`
      );
      const data = await res.json();
      setQuote(data);
      console.log("data", data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getRandomQuote();
  }, [selectedTag]);

  return (
    <div className="w-full h-full flex items-center justify-center pt-[3rem] flex-col">
      <Quote quote={quote} />
      <Dropdown selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
      <Button onClick={() => getRandomQuote()} />
    </div>
  );
};

export default Home;
