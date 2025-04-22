import { useState } from "react";
import "./seatBook.css";

export const SeatBook = () => {
  const bookedSeats = [2, 4, 7, 11];
  const [selectedSeats, setSelectSeat] = useState([1]);
  const toggleSeat = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectSeat(selectedSeats.filter((seat) => seat != seatNumber));
    } else {
      setSelectSeat([...selectedSeats, seatNumber]);
    }
  };
  const price = 200;
  const total = () => {
    return selectedSeats.length * price;
  };

  const renderSeats = (rows, cols) => {
    const seats = [];
    for (let i = 0; i < rows * cols; i++) {
      const seatNumber = i + 1;
      const isBooked = bookedSeats.includes(seatNumber);
      const isSelected = selectedSeats.includes(seatNumber);
      seats.push(
        <div
          key={i}
          className={`seat ${
            isBooked
              ? "bookedSeat"
              : isSelected
              ? "selectedSeat"
              : "availableSeat"
          }`}
          onClick={() => toggleSeat(seatNumber)}
        >
          {seatNumber}
        </div>
      );
    }
    return seats;
  };

  return (
    <>
      <div class="screen">Screen</div>
      <div class="seatContainer">{renderSeats(4, 5)}</div>
      <div>Total: {total()}</div>
    </>
  );
};
