import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BracesGenerator() {
  const [n, setN] = useState(1);
  const [combinations, setCombinations] = useState([]);
  const [error, setError] = useState("");


  const generateBraces = (n) => {
    const result = [];
    const backtrack = (current, openCount, closeCount) => {
      if (openCount === n && closeCount === n) {
        result.push(current);
        return;
      }
      if (openCount < n) {
        backtrack(current + "(", openCount + 1, closeCount);
      }
      if (closeCount < openCount) {
        backtrack(current + ")", openCount, closeCount + 1);
      }
    };
    backtrack("", 0, 0);
    return result;
  };
  const handleGenerate = () => {
    if (n > 10) {
      setError("Only 10 pairs are allowed. Session timeout error.");
      setCombinations([]);
    } else {
      setError("");
      setCombinations(generateBraces(n));
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
       <Link
    to="/"
    className="inline-block mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
  >
    ← Back
  </Link>

  <h2 className="text-2xl font-bold mb-4 text-center">Balanced Braces Generator</h2>

      <input
        type="number"
        min="1"
        value={n}
        onChange={(e) => setN(Number(e.target.value))}
        className="border p-2 w-full rounded-md"
      />

      <button
        onClick={handleGenerate}
        className="mt-4 w-full bg-blue-500 text-white p-3 rounded-lg"
      >
        Generate Combinations
      </button>

      {error && <p className="mt-4 text-red-500 font-semibold text-center">{error}</p>}

      {combinations.length > 0 && !error && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Valid Combinations:</h3>
          <ul className="list-disc pl-6">
            {combinations.map((comb, index) => (
              <li key={index} className="font-mono">{comb}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
