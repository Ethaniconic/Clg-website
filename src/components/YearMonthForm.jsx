import React, { useState } from "react";
import WatermarkBg from "../assets/WatermarkBg.jpg";

const YearMonthForm = () => {
  const [selectedYear, setSelectedYear] = useState("");

  const allMonths = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // If year is 2023-2024, only show one option
  const monthOptions =
    selectedYear === "2023-2024" ? ["Jan - Dec"] : allMonths;

  return (
    <form
      className="bg-center bg-no-repeat h-auto flex flex-col md:flex-row gap-6 items-center justify-center my-10 bg-base-100/70 backdrop-blur-md p-6 rounded-2xl shadow-xl ring-1 ring-primary/10 form"
      style={{ backgroundImage: `url(${WatermarkBg})` }}
    >
      {/* Year Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Year</span>
        </label>
        <select
          className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100"
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="" disabled>
            Pick a year
          </option>
          <option>2022</option>
          <option>2023-2024</option>
          <option>2025</option>
        </select>
      </div>

      {/* Month Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Month</span>
        </label>
        <select
          className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100"
        >
          <option value="" disabled selected>
            Pick a month
          </option>
          {monthOptions.map((month, idx) => (
            <option key={idx}>{month}</option>
          ))}
        </select>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="btn btn-accent text-neutral mt-6 md:mt-8 w-full md:w-auto"
      >
        Get Magazine
      </button>
    </form>
  );
};

export default YearMonthForm;