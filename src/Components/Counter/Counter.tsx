import React, { useEffect, useState } from "react";

export interface CounterProps {
  description: string;
  defaultCount: number;
}

export function Counter({ description, defaultCount }: CounterProps) {
  const [count, setCount] = useState(defaultCount);
  const [incrementor, setIncrementor] = useState(1);
  const [isBigEnough, setIsBigEnough] = useState(false);
  useEffect(() => {
    let id: NodeJS.Timeout;
    if (count >= 10) {
      id = setTimeout(() => {
        setIsBigEnough(true);
      });
    } else setIsBigEnough(false);
    return () => clearTimeout(id);
  });
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
      {!isBigEnough && <div>I&apos;m too small</div>}
    </div>
  );
}
