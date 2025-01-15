"use client"

import Hero from './_components/Hero'
import CategoryList from './_components/CategoryList'
import GlobalApi from './_services/GlobalApi'
import { useEffect, useState } from 'react'
import BusinessList from './_components/BusinessList'

export default function Home() {

 const [categoryList, setCategoryList] = useState([]);
 const [businessList, setBusinessList] = useState([]);

  const getCategoryList = () =>{
    GlobalApi.getCategory().then(res=>{
      setCategoryList(res.categories);
    })

  }

  const getBusinessList = () => {
   GlobalApi.getBusinessList().then(res => (
   setBusinessList(res.businessLists)
 ))
  }


  useEffect(() => {
   getCategoryList();
   getBusinessList()
   }, [])
  
  return (
    <div> 
      <Hero />
      <CategoryList categoryList={categoryList}/>
      <BusinessList businessList={businessList}
         title={'Popular Business'}/>
    </div>
  );
}
