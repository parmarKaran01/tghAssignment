import React from "react";
import { useSelector } from "react-redux";
import Quote from "../components/Quote";

const Bookmark = () => {
  const quotes = useSelector((state) => state.quotes);
  console.log("quotes", quotes);
  return (
    <div className="w-full overflow-x-hidden flex items-center justify-center pt-[3rem] flex-col gap-[1rem]">
      {quotes.map((item) => (
        <Quote key={item._id} quote={item} isBookmark={true} />
      ))}
      hello
    </div>
  );
};

export default Bookmark;
