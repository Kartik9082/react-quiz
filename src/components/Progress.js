import React from "react";

const Progress = ({ index, numQuestion, points, maxPossiblePoints, answer }) => {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />

      <p>
        Questions <strong>{index + 1}</strong> / {numQuestion}
      </p>
      <p>
        <strong>{points}</strong>/ {maxPossiblePoints}
      </p>
    </header>
  );
};

export default Progress;
