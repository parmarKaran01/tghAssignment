export const baseURL = "https://api.quotable.io";

export const addQuoteToLocalStorage = (quote) => {
  let quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  const ele = quotes.find((item) => item._id === quote._id);
  if(!ele) {
    quotes = [quote, ...quotes];
    localStorage.setItem("quotes", JSON.stringify(quotes));
  }else {
    alert("Quote already added to bookmarks")
  }

};

export const removeQuoteFromLocalStorage = (quote) => {
  let quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  quotes = quotes.filter((item) => item._id !== quote._id);
  localStorage.setItem("quotes", JSON.stringify(quotes));
};


export const getAllQuotesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem("quotes")) || [];
}