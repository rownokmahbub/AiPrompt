'use client'
import CarsFiltersOption from '@/components/Home/CarsFiltersOption'
import CarsList from '@/components/Home/CarsList'
import Hero from '@/components/Home/Hero'
import { getCarList } from '@/services'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Home() {
  const [carList,setCarsList]= useState<any>([])
  const [carOrgList, setCarsOrgList] = useState<any>([]);
  useEffect(() => {
getCarList_();
  }, [])
  
  const getCarList_ = async ()=>{
    const result:any = await getCarList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  }
  return (
    <main className="container mx-auto">
      <Hero />
      <CarsFiltersOption carsList={carList} />
      <CarsList carsList={carList} />
    </main>
  );
}
