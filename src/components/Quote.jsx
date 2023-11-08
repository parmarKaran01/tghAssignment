import React, { useEffect, useState } from "react";
import icon from "../assets/bookmark.svg";
import tick from "../assets/tick.svg";
import Delete from "../assets/delete.svg";
import { useDispatch } from "react-redux";
import { addQuote, removeQuote } from "../quoteSlice";
import {
  addQuoteToLocalStorage,
  removeQuoteFromLocalStorage,
} from "../constants";

const Quote = ({ quote, isBookmark = false, loading }) => {
  const dispatch = useDispatch();
  const [addedToBookmark, setAddedToBookmark] = useState(false);
  const addQuoteToBookmarks = () => {
    if (!quote.content) return;
    dispatch(addQuote(quote));
    addQuoteToLocalStorage(quote);
    setAddedToBookmark(true);
  };

  const removeQuoteFromBookmarks = () => {
    dispatch(removeQuote(quote._id));
    removeQuoteFromLocalStorage(quote);
  };

  useEffect(() => {
    setAddedToBookmark(false);
  }, [quote]);

  return (
    <div className="w-[100%] p-6 flex flex-col items-center bg-[#D05252] min-h-[250px] rounded-[30px] md:w-[500px] relative">
      <p className="text-xl">{loading ? "Loading...." : quote.content}</p>
      <p className="mt-auto text-md font-bold">- {quote.author}</p>
      {!isBookmark ? (
        addedToBookmark ? (
          <img
            src={tick}
            alt="icon"
            className="h-6 w-6 absolute bottom-6 right-8 cursor-pointer"
          />
        ) : (
          <img
            src={icon}
            alt="icon"
            className="h-6 w-6 absolute bottom-6 right-8 cursor-pointer"
            onClick={addQuoteToBookmarks}
          />
        )
      ) : (
        <img
          src={Delete}
          alt="icon"
          className="h-6 w-6 absolute bottom-6 right-8 cursor-pointer"
          onClick={removeQuoteFromBookmarks}
        />
      )}
    </div>
  );
};

export default Quote;
