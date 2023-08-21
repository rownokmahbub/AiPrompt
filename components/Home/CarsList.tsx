import React from 'react'
import CarCard from './CarCard'

export default function CarsList(props:any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {props.carsList.map((car: any, i: number) => (
        <div key={i}>
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}
