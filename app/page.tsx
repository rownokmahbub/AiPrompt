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
  const filterCarList=(brand:string)=>{
    const filterList=carOrgList.filter((item:any)=>item.carBrand==brand);
    setCarsList(filterList)
  }

  const orderCarList = (order: any) => {
    const sortedData = [...carOrgList].sort((a, b) =>
      order == -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };
  return (
    <main className="container mx-auto">
      <Hero />
      <CarsFiltersOption
        carsList={carOrgList}
        orderCarList={(value: string) => orderCarList(value)}
        setBrand={(value: string) => filterCarList(value)}
      />
      <CarsList carsList={carList} />
    </main>
  );
}
