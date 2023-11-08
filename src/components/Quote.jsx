import React, { useEffect, useState } from "react";
import icon from "../assets/bookmark.svg";
import tick from "../assets/tick.svg";
import { useDispatch } from "react-redux";
import { addQuote } from "../quoteSlice";

const Quote = ({ quote, isBookmark = false }) => {
  const dispatch = useDispatch();
  const [addedToBookmark, setAddedToBookmark] = useState(false);
  const addQuoteToBookmarks = () => {
    dispatch(addQuote(quote));
    setAddedToBookmark(true);
  };

  useEffect(() => {
    setAddedToBookmark(false);
  }, [quote]);
  return (
    <div className="w-90% p-6 flex flex-col items-center bg-[#D05252] min-h-[250px] rounded-[30px] md:w-[500px] relative">
      <p className="text-xl">{quote.content}</p>
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
      ) : null}
      {/* {addedToBookmark ? (
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
      )} */}
    </div>
  );
};

export default Quote;
