'use client'
import React, { useEffect, useState } from "react";

export default function CarsFiltersOption({carsList}:any) {
    const [brandList,setBrandList] = useState<any>()
    const BrandSet = new Set()
    useEffect(() => {
     if (carsList) {
        filterCarList()
     }
      }
    , [carsList])
    
    const filterCarList = ()=>{
        carsList.forEach((element:any) => {
            BrandSet.add(element.carBrand)
        });
        console.log(BrandSet)
        setBrandList(Array.from(BrandSet))
    }
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center">
      <div>
        <h2 className="text-4xl mt-5 mb-2 font-semibold">Cars Catalog</h2>
        <p className="text-xs md:text-lg">Explore our cars you might likes</p>
      </div>
      <div className="flex items-center gap-5">
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-primary w-full max-w-xs">
          <option disabled selected>
            Manufacturer
          </option>
          <option>Honda</option>
          <option>Bmw</option>
          <option>Toyota</option>
        </select>
      </div>
    </div>
  );
}
