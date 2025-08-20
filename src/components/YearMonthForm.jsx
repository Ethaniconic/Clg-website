import React from "react";

const YearMonthForm = () => {
  return (
    <form className="bg-[url(C:\Users\Lenovo\OneDrive\Documents\Clg-website-reactjs\src\assets\Watermarked-bg.jpg)] bg-center  bg-no-repeat h-auto flex flex-col md:flex-row gap-6 items-center justify-center my-10 bg-base-100/70 backdrop-blur-md p-6 rounded-2xl shadow-xl ring-1 ring-primary/10 form">
      {/* Year Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Year</span>
        </label>
        <select className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100">
          <option disabled selected className="text-zinc-200">
            Pick a year
          </option>
          <option>2022</option>
          <option>2023</option>
          <option>2024</option>
          <option>2025</option>
        </select>
      </div>
      {/* Month Dropdown */}
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text text-primary font-semibold text-[#050a30]">Month</span>
        </label>
        <select className="select select-bordered select-primary bg-[#050a30] focus:outline-none text-zinc-100">
          <option disabled selected className="text-zinc-200">
            Pick a month
          </option>
          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>
        </select>
      </div>
      {/* Submit Button */}
      <button type="submit" className="btn btn-accent text-neutral mt-6 md:mt-8 w-full md:w-auto">
        Get Magazine
      </button>
    </form>
  );
};

export default YearMonthForm;