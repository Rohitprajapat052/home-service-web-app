'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from './_component/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import moment from 'moment';


const MyBooking = () => {

  const { data } = useSession()
  const [bookingHistory, setSetBookingHistory] = useState([])
   
 const GetUserBookingHistory = () => {
     GlobalApi.GetUserBookingHistory(data.user.email).then(res=>{
           setSetBookingHistory(res.bookings);
     })
 }

 useEffect(() => {
     data&&GetUserBookingHistory()
 }, [data])

 
 const filterData = (type) => {
  const today = new Date();

  if (type === 'booked') {
    return bookingHistory.filter(item => {
      const bookingDate = moment(item.date, 'DD-MM-YYYY').toDate();
      return bookingDate >= today;
    });
  }

  if (type === 'completed') {
    return bookingHistory.filter(item => {
      const bookingDate = moment(item.date, 'DD-MM-YYYY').toDate();
      return bookingDate < today;
    });
  }

  return [];
};

  return (
    <div className="my-10 mx-5 md:mx-36">
    <h2 className="font-bold text-[20px] my-2 ">My Bookings</h2>
      <Tabs defaultValue="booked" className="w-full">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="booked">Booked</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        <TabsContent value="booked">
          <BookingHistoryList bookingHistory={filterData('booked')} />
        </TabsContent>
        <TabsContent value="completed">
          <BookingHistoryList bookingHistory={filterData('completed')} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MyBooking;
