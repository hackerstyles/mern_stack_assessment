import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function EditDistance() {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [minOperations, setMinOperations] = useState(null);

  // Function to calculate the minimum edit distance
  const calculateEditDistance = () => {
    if (!str1 || !str2) {
      alert("Please enter both strings!");
      return;
    }

    const m = str1.length, n = str2.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));

    // Base cases
    for (let i = 0; i <= m; i++) dp[i][0] = i;  
    for (let j = 0; j <= n; j++) dp[0][j] = j;  

    // Fill DP Table
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1]; // No operation needed
        } else {
          dp[i][j] = Math.min(
            dp[i - 1][j] + 1,    // Remove
            dp[i][j - 1] + 1,    // Insert
            dp[i - 1][j - 1] + 1 // Replace
          );
        }
      }
    }

    setMinOperations(dp[m][n]); // Set result
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg"> 
     <Link
    to="/"
    className="inline-block mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
  >
    ← Back
  </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Distance Calculator</h2>

      {/* Input Fields */}
      <div className="mb-4">
        <label className="block text-lg font-medium">String 1:</label>
        <input
          type="text"
          value={str1}
          onChange={(e) => setStr1(e.target.value)}
          className="w-full p-2 border rounded-md mt-1"
        />
      </div>

      <div className="mb-4">
        <label className="block text-lg font-medium">String 2:</label>
        <input
          type="text"
          value={str2}
          onChange={(e) => setStr2(e.target.value)}
          className="w-full p-2 border rounded-md mt-1"
        />
      </div>

      {/* Calculate Button */}
      <button
        onClick={calculateEditDistance}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Calculate Edit Distance
      </button>

      {/* Result */}
      {minOperations !== null && (
        <p className="mt-4 text-lg font-semibold text-center">
          Minimum Operations: <span className="text-blue-600">{minOperations}</span>
        </p>
      )}
    </div>
  );
}
