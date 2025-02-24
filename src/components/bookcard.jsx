import React from "react";

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="p-4 border border-black shadow-lg rounded-lg bg-white w-72 text-center">
      {/* Book Cover Image */}
      <img
        src={image}
        alt={name}
        className="w-64 h-64 object-cover rounded-md mx-auto"
      />
      
      {/* Book Title */}
      <h2 className="mt-2 text-lg font-semibold">{name}</h2>
      
      {/* Book Genre */}
      <p className="text-gray-600">Genre: {genre}</p>
      
      {/* Book Author */}
      <p className="text-gray-600">Author: {author}</p>
    </div>
  );
};

export default BookCard;
