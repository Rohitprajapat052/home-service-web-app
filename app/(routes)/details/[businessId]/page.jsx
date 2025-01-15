'use client'
import React, { useEffect , useState } from 'react'
import { useSession } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import GlobalApi from '@/app/_services/GlobalApi';
import { useParams } from 'next/navigation';
import BusinessInfo from '../_components/BusinessInfo'
import BusinessDescription from '../_components/BusinessDescription'
import SuggestedBusinessList from '../_components/SuggestedBusinessList'

const BusinessDetail = () => {

    const {businessId} = useParams()
    const {data, status}= useSession();
    const [business, setBusiness] = useState([])

   
    const getbusinessById=()=>{
       GlobalApi.getBusinessById(businessId).then(res=>{
        setBusiness(res.businessList)

      }
      )
    }

    const checkUserAuth=()=>{
      
      if(status=='loading'){
          return <p>Loading...</p>
      }
      if(status=='unauthenticated'){
          signIn('descope');
      }
    }

    useEffect(() => {
      if (businessId) {
          getbusinessById();
      }
  }, [businessId]);
  
 useEffect(() => {
 checkUserAuth();
 }, [])
 
 
  return  status=='authenticated'&&business&&(

   
    <div className='py-8 md:py-20 px-10 md:px-36'>
      <BusinessInfo business={business} />
      <div className='grid grid-cols-4 mt-16'>
        <div className=' col-span-4 md:col-span-3 order-last md:order-first'>
         <BusinessDescription  business={business}/> 
      </div>

      <div className=''>
          <SuggestedBusinessList business={business} /> 
      </div>
      </div>
    </div>
  )
}

export default BusinessDetail
