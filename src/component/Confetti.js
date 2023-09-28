import React from "react";
import Confetti from "react-confetti";

export const ConfettiCompo = () => {
  return (
    <Confetti
      width={420}
      height={800}
      run={true}
      recycle={true}
      numberOfPieces={400}
    />
  );
};
