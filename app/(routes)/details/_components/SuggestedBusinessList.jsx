import { Button } from '@/components/ui/button'
import {  NotebookPen } from 'lucide-react'
import React ,{useState, useEffect} from 'react'
import GlobalApi from '@/app/_services/GlobalApi'
import Image from 'next/image'
import Link from 'next/link'
import BookingSection from '../_components/BookingSection'

const SuggestedBusinessList = ({business}) => {
   
  

  const [businessList, setBusinessList] = useState(null)
  
 
  
 useEffect(() => {
  business&&getBusinessList();
}, [business]);
  


 const getBusinessList =()=>{
   GlobalApi.getBusinessByCategory(business?.category?.name)
   .then(res=>{
    setBusinessList(res.businessLists)
  

   })
   
 }



return (
  <div className='md:pl-10'>
   <BookingSection business={business}>
    <Button className='flex gap-2 w-full'><NotebookPen />Book Appointment</Button>    
   </BookingSection>

    <div className='hidden md:block'>

  
    <h2 className='font-bold text-lg mt-3 mb-3 '>Similar Business</h2>
    <div >
      {businessList && businessList.map((business, index) => (
        <Link  href={'/details/'+business.id} key={index} className="flex gap-2 mb-4  rounded-lg p-2 hover:border border-primary
         cursor-pointer hover:shadow-lg">
          <Image 
            src={business?.images[0]?.url} 
            alt={business.name} 
            height={80} 
            width={80} 
            className='rounded-lg object-cover' 
          />
          <div className=''>
            <h2 className='font-bold'>{business.name}</h2>
            <h2 className='text-primary'>{business.contactPerson}</h2>
            <h2 className='text-gray-500'>{business.address}</h2>
          </div>
        </Link>
      ))}
    </div>
    </div>
  </div>
);

}
export default SuggestedBusinessList
