import React from "react";
import "./Book.css";
const BookingForm = () => {
  return (
    <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg space-y-4">
      {/* Where */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Where</label>
        <input
          type="text"
          placeholder="Search places"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* When */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">When</label>
        <input
          type="date"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Time */}
      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Time</label>
        <input
          type="time"
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        Book Now
      </button>
    </form>
  );
};

export default BookingForm;
