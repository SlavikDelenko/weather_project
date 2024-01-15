import React from 'react'

export default function SearchCity() {
  return (
    <>
      <div>SearchCity</div>
      <div className="input-wrapper w-64 mx-auto mt-10 relative">
  <input className="input-box text-blue-500 focus:outline-none border-b-2 border-gray-300" type="text" placeholder="Enter your text" />
  <span className="underline bg-blue-500 absolute bottom-0 left-0 w-full h-2 transform scale-x-0 transition-transform duration-300"></span>
</div>

    </>
  )
}
