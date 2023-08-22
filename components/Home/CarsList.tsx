'use client'
import React, { useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal';

export default function CarsList(props:any) {
  const [selectedCar,setSelectedCar]= useState<any>([])
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {props.carsList.map((car: any, i: number) => (
        <div key={i} onClick={() => {(window as any).my_modal_4.showModal() ;setSelectedCar(car)}}>
          <CarCard car={car} />
        </div>
      ))}
    
      <dialog id="my_modal_4" className="modal">
       <BookingModal car={selectedCar}/>
      </dialog>
    </div>
  );
}
