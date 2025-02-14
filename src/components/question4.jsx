import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function IpodPurchase() {
  const [country, setCountry] = useState("India");
  const [units, setUnits] = useState("");
  const [result, setResult] = useState(null);

  // Initial stock
  const initialStock = { India: 100, Srilanka: 100 };
  const prices = { India: 30000, Srilanka: 25000 };
  const transportCostPer10 = 5000; // Cost for 10 units

  const calculateCost = () => {
    let unitsNeeded = parseInt(units);
    if (isNaN(unitsNeeded) || unitsNeeded <= 0) {
      alert("Please enter a valid number of units.");
      return;
    }

    let stockIndia = initialStock.India;
    let stockSrilanka = initialStock.Srilanka;
    let minCost = 0;

    if (country === "India") {
      if (unitsNeeded <= stockIndia) {
        minCost = unitsNeeded * prices.India;
        stockIndia -= unitsNeeded;
      } else {
        let remaining = unitsNeeded - stockIndia;
        minCost += stockIndia * prices.India;
        stockIndia = 0;

        let transportBlocks = Math.ceil(remaining / 10);
        let transportCost = transportBlocks * transportCostPer10;

        if (remaining <= stockSrilanka) {
          minCost += remaining * prices.Srilanka + transportCost;
          stockSrilanka -= remaining;
        } else {
          alert("Not enough stock available!");
          return;
        }
      }
    } else if (country === "Srilanka") {
      if (unitsNeeded <= stockSrilanka) {
        minCost = unitsNeeded * prices.Srilanka;
        stockSrilanka -= unitsNeeded;
      } else {
        let remaining = unitsNeeded - stockSrilanka;
        minCost += stockSrilanka * prices.Srilanka;
        stockSrilanka = 0;

        let transportBlocks = Math.ceil(remaining / 10);
        let transportCost = transportBlocks * transportCostPer10;

        if (remaining <= stockIndia) {
          minCost += remaining * prices.India + transportCost;
          stockIndia -= remaining;
        } else {
          alert("Not enough stock available!");
          return;
        }
      }
    }

    setResult({
      minCost,
      stockIndia,
      stockSrilanka,
    });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg"> 
     <Link
    to="/"
    className="inline-block mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
  >
    ← Back
  </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">iPod Purchase Calculator</h2>

      <div className="mb-4">
        <label className="block font-semibold">Select Country:</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="p-2 w-full border rounded-lg"
        >
          <option value="India">India</option>
          <option value="Srilanka">Srilanka</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block font-semibold">Enter Number of Units:</label>
        <input
          type="number"
          placeholder="Enter number of units"
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          className="p-2 w-full border rounded-lg"
        />
      </div>

      <button
        onClick={calculateCost}
        className="w-full bg-green-500 text-white p-3 rounded-lg"
      >
        Calculate Minimum Cost
      </button>

      {result && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold">Result:</h3>
          <p>Minimum Cost: Rs. {result.minCost}</p>
          <p>Stock Left in India: {result.stockIndia}</p>
          <p>Stock Left in Srilanka: {result.stockSrilanka}</p>
        </div>
      )}
    </div>
  );
}
