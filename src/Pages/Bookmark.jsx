import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quote from "../components/Quote";
import { getAllQuotesFromLocalStorage } from "../constants";
import { initializeQuotes } from "../quoteSlice";

const Bookmark = () => {
  const quotes = useSelector((state) => state.quotes);
  const dispatch = useDispatch()

  useEffect(() => {
    const items = getAllQuotesFromLocalStorage()
    dispatch(initializeQuotes(items)) 
  }, [])
  console.log("quotes", quotes);
  return (
    <div className="w-full overflow-x-hidden flex items-center justify-center pt-[3rem] flex-col gap-[1rem] p-4">
      {quotes.map((item) => (
        <Quote key={item._id} quote={item} isBookmark={true} />
      ))}
    </div>
  );
};

export default Bookmark;
