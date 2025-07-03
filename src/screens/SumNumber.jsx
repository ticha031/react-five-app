import React from 'react'
import bmi from './../assets/bmi.png'
import { useState } from 'react'

function SumNumber() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [sum, setSum] = useState('0.00')

  const handleInputNum1 = (e) => {setNum1(e.target.value)}
  const handleInputNum2 = (e) => {setNum2(e.target.value)}

  const handleCancelClick = () => {
    setNum1('')
    setNum2('')
    setSum('0.00')
  } 

  const  handleSumNumberClick = () => {
    if (num1.trim() === '' || num2.trim() === '') {
      setSum('กรุณากรอกตัวเลขทั้งสองช่อง');
      return;
    }
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setSum('กรุณากรอกตัวเลขที่ถูกต้อง');
      return;
    }
    setSum((n1 + n2).toFixed(2));
  }
                                    


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-purple-300">
        <div className="flex flex-col items-center justify-center w-2/4 bg-white shadow-ig rounded-md py-10 px-20">
          <div className="text-xl font-bold text-purple-700">
            คำนวณผลรวมตัวเลข
          </div>
            <img src={bmi} alt="รูปคริสมาส"
              className="w-2/5 mt-4 mb-4 rounded-md shadow-md"/>
          <div className="text-xl font-bold text-gray-800
                          w-full text-left mt-4 ">
            ป้อนตัวเลขตัวที่ 1 
          </div>
          <div className="text-purple-950 w-full text-left mt-4 ">
            <input type="text" onChange={handleInputNum1} value={num1} className=" border rounded-sm w-full p-1 bg-purple-300 border-purple-500"/>
          </div>
          <div className="text-xl font-bold text-gray-800
                          w-full text-left mt-4 ">
            ป้อนตัวเลขตัวที่ 2 
          </div>
          <div className="text-xl font-bold text-gray-800 w-full text-left mt-4 "> 
            <input type="text" onChange={handleInputNum2} value={num2} className=" border rounded-sm w-full p-1 bg-purple-300 border-purple-500" />
          </div>
          <div className='flex mt-5 gap-5'>
            <button onClick={handleCancelClick} className='bg-purple-600  hover:bg-purple-900 text-white px-4 py-2 rounded-md cursor-pointer'>
              ยกเลิก
            </button>
            <button onClick={handleSumNumberClick} className='bg-purple-500 hover:bg-purple-900 text-white px-4 py-2 rounded-md cursor-pointer'>
              คำนวณ
            </button>
          </div>
          <div className='mt-5'>
            <span className='text-2xl font-bold'>ผลรวมคือ: </span>
            <span className='text-4xl font-bold text-red-500'>{sum}</span>
          </div>


        </div>
    </div>
  )
}

export default SumNumber