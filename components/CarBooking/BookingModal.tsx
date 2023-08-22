import React from 'react'
import CarCard from '../Home/CarCard';
import From from './From';

export default function BookingModal({car}:any) {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl">
      <div className="border-b-[1px] pb-2 border-slate-600">
        <h3 className=" text-[30px] ">
          Rent A Car Now!
        </h3>
      </div>
      <div
        className="grid grid-cols-1
    md:grid-cols-2 p-5"
      >
        <div>
          <CarCard car={car} />
        </div>
        <div>
            <From/>
        </div>
      </div>
  
    </form>
  );
}
