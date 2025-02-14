import React, { useState } from "react";

const questions = [
  {
    id: 1,
    title: "Minimum Cricket Course Fee",
    description: "Rahul wants to apply in the institute such that he can get all 3 courses and pay the minimum fee.",
    details: [
      "An institute provides 3 cricket courses: A, B, and C.",
      "Courses can be taken individually or in a group (e.g., AB, AC, CAB).",
      "Find the minimum cost to take all 3 courses.",
    ],
  },
  {
    id: 2,
    title: "Ipod Purchase & Stock Management",
    description: "Calculate the minimum cost of purchasing a given number of units.",
    details: [
      "Stocks are available in India and Sri Lanka (100 each).",
      "Ipod costs Rs.30,000 in India and Rs.25,000 in Sri Lanka.",
      "Exporting stocks costs Rs.5,000 per 10 blocks.",
      "Find the minimum cost while maintaining available stocks.",
    ],
  },
  {
    id: 3,
    title: "Balanced Braces Generator",
    description: "Generate all balanced parentheses combinations for a given value n.",
    details: [
      "For example, if n = 3, the valid sets are:",
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ],
  },
  {
    id: 4,
    title: "String Conversion (Edit Distance)",
    description: "Find the minimum number of operations to convert string s to string t.",
    details: [
      "Allowed operations: Insert, Remove, Replace.",
      "Example:",
      "Input: s = 'geek', t = 'gesek'",
      "Output: 1 (Insert 's' between two 'e's in 'geek')",
    ],
  },
];

export default function QuestionList() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (id) => {
    setOpenQuestion(openQuestion === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Problem Statements</h2>

      <div className="space-y-4">
        {questions.map((q) => (
          <div key={q.id} className="bg-white shadow-lg rounded-lg p-4">
            <button
              onClick={() => toggleQuestion(q.id)}
              className="w-full text-left text-xl font-semibold text-blue-600 flex justify-between"
            >
              {q.title}
              <span className="text-gray-500">{openQuestion === q.id ? "▲" : "▼"}</span>
            </button>
            {openQuestion === q.id && (
              <div className="mt-3 text-gray-700">
                <p className="font-medium">{q.description}</p>
                <ul className="mt-2 list-disc pl-5">
                  {q.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
