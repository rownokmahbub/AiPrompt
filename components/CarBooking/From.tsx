import React from 'react'

export default function From() {
  return (
    <div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">PickUp Location</label>
        <select
          className="select 
        select-primary w-full max-w-lg"
          name="location"
          
        >
          <option disabled selected>
            PickUp Location?
          </option>
         
        </select>
      </div>
      <div className="flex flex-col gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pick Up Date</label>
          <input
            type="date"
            
            placeholder="Type here"
            name="pickUpDate"
            className="input input-primary w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Date</label>
          <input
            type="date"
           
            placeholder="Type here"
            name="dropOffDate"
            className="input input-primary w-full max-w-lg"
          />
        </div>
      </div>
      <div className="flex gap-5 ">
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Pick Up Time</label>
          <input
            type="time"
         
            name="pickUpTime"
            placeholder="Type here"
            className="input input-primary w-full max-w-lg"
          />
        </div>
        <div className="flex flex-col w-full mb-5">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            
            placeholder="Type here"
            className="input input-primary w-full max-w-lg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="text"
          placeholder="Type here"
         
          name="contactNumber"
          className="input input-primary w-full max-w-lg"
        />
      </div>
      <div className="modal-action">
        <button className="btn">Close</button>
        <button
          className="btn bg-blue-500 text-white
hover:bg-blue-800"
          
        >
          Save
        </button>
      </div>
    </div>
  );
}
