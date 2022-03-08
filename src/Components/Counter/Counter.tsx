import React, { useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <div>
      <h2>
        DESC: {description} - DC: {defaultCount}
      </h2>
      <label>
        incrementor
        <input
          type="number"
          value={incrementor}
          onChange={(e) => setIncrementor(parseInt(e.target.value) || 1)}
        />
      </label>
      <button
        aria-label="Subtract from Counter"
        onClick={() => setCount(count - incrementor)}
      >
        -
      </button>
      Current Count: {count}
      <button
        aria-label="Add to Counter"
        onClick={() =>
          setTimeout(() => {
            setCount((c) => c + incrementor);
          }, 200)
        }
      >
        +
      </button>
    </div>
  );
}
