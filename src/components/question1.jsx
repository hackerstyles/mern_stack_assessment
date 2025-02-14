import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CourseSelection() {
  const courses = [
    { name: "A", fee: 5000 },
    { name: "B", fee: 4000 },
    { name: "C", fee: 3000 },
    { name: "AB", fee: 8000 },
    { name: "AC", fee: 7000 },
    { name: "BC", fee: 6000 },
    { name: "ABC", fee: 10000 },
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [minFee, setMinFee] = useState(null);

 
  const toggleCourse = (course) => {
    setSelectedCourses((prev) =>
      prev.includes(course) ? prev.filter((c) => c !== course) : [...prev, course]
    );
  };

  
  const coversAllCourses = (selected) => {
    const selectedSet = new Set(selected.flatMap((c) => c.split("")));
    return selectedSet.has("A") && selectedSet.has("B") && selectedSet.has("C");
  };

 
  const calculateMinFee = () => {
    if (!coversAllCourses(selectedCourses)) {
      setMinFee("Selection must include A, B, and C");
      return;
    }

    let selectedCombinations = courses.filter((c) => selectedCourses.includes(c.name));
    let totalFee = selectedCombinations.reduce((acc, course) => acc + course.fee, 0);
    
    setMinFee(totalFee);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
       <Link
    to="/"
    className="inline-block mb-4 px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
  >
    ← Back
  </Link>
      <h2 className="text-2xl font-bold mb-4 text-center">Select Cricket Courses</h2>

      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <button
            key={course.name}
            onClick={() => toggleCourse(course.name)}
            className={`p-3 text-lg rounded-lg transition duration-200 ${
              selectedCourses.includes(course.name) ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            {course.name} - ₹{course.fee}
          </button>
        ))}
      </div>

      <button
        onClick={calculateMinFee}
        className="mt-4 w-full bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition duration-200"
      >
        Calculate Minimum Fee
      </button>

      {minFee !== null && (
        <p className="mt-4 text-lg font-semibold text-center">
          Minimum Fee: <span className="text-blue-600">{minFee}</span>
        </p>
      )}
    </div>
  );
}
