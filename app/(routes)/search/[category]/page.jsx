'use client'
import BusinessList from '@/app/_components/BusinessList'
import GlobalApi from '@/app/_services/GlobalApi'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'


const BusinessByCategory = () => {
   const [businessList, setBusinessList] = useState([])
   const { category } = useParams();

  const getBusinessList = ()=>{
    GlobalApi.getBusinessByCategory(category)
    .then(res=>{setBusinessList(res?.businessLists)})
  }

  useEffect(() => {
    if (category) getBusinessList();
  }, [category]);
  
  return (
    <div>
      <BusinessList title={category}
        businessList={businessList}
      />
    </div>
  )
}

export default BusinessByCategory 
