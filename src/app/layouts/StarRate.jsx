"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [rateColor, setColor] = useState(null);

  return (
    <>
      {[...Array(5)].map((star, index) => {
        const currentRate = index + 1;
        return (
          <>
            <label>
              <input
                type="radio"
                name="rate"
                className="hidden"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />

              <FaStar
                color={
                  currentRate <= (rateColor || rating) ? "#E8CF36" : "grey"
                }
              />
            </label>
          </>
        );
      })}
    </>
  );
};

export default StarRate;
