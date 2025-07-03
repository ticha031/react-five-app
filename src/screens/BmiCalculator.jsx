import React from "react";
import sum from "./../assets/sum.png";

function BmiCalculator() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-300">
      <div className="flex flex-col items-center justify-center w-2/4 bg-white shadow-ig rounded-md py-10 px-20">
        <div className="text-xl font-bold text-pink-700">
          คำนวณ BMI
        </div>
        <img
          src={sum} alt="รูปคริสมาส"
          className="w-2/5 mt-4 mb-4 rounded-md shadow-md"/>
        <div
          className="text-xl font-bold text-gray-800
                                    w-full text-left mt-4 ">
          ป้อนน้ำหนัก (กิโลกรัม) 
        </div>
        <div className="text-purple-950 w-full text-left mt-4 ">
          <input
            type="text"
            className=" border rounded-sm w-full p-1 bg-pink-400 border-purple-500"/>
        </div>
        <div
          className="text-xl font-bold text-gray-800 w-full text-left mt-4 ">
          ป้อนส่วนสูง (เซนติเมตร)
        </div>
        <div className="text-xl font-bold text-gray-800 w-full text-left mt-4 ">
          <input
            type="text"
            className=" border rounded-sm w-full p-1 bg-pink-400 border-purple-500"/>
        </div>
        <div className="text-xl font-bold text-gray-800 w-full text-left mt-4 ">
          เลือกเพศ
        </div>
        <div className="flex gap-6 mt-2 text-gray-700">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="form-radio text-pink-600"
            />
            <span className="ml-2">ชาย</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
              className="form-radio text-pink-600"
            />
            <span className="ml-2">หญิง</span>
          </label>
        </div>
        <div className="flex mt-5 gap-5">
          <button className="bg-pink-600  hover:bg-pink-900 text-white px-4 py-2 rounded-md cursor-pointer">
            ยกเลิก
          </button>
          <button className="bg-pink-500 hover:bg-pink-900 text-white px-4 py-2 rounded-md cursor-pointer">
            คำนวณ
          </button>
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
