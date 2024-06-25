'use client'
import Table from "@/app/components/Table"
import page from "@/app/page"
import { Search } from 'lucide-react'
import DetailProduct from "@/app/components/DetalProduct"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllOrders } from "@/app/api/orders_api/api"
import { useRouter } from "next/navigation"
import Loading from "../loading/page"

const Page = () =>{
  const router=useRouter();
    const [data,setData]=useState([]);
    const [enabled, setEnabled] = useState(true);
    const orders=useQuery({
      queryKey:['products'],
      queryFn:()=>getAllOrders(),
      retry:3,
      retryDelay:5000,
      enabled:enabled,
    })
    useEffect(() => {
      if (orders.data) {
        setData(orders.data);
        setEnabled(false);
      }
    }, [orders.data]);
  
    if(orders.isLoading){
      return <Loading/>
    }
    if(orders.isError){
      router.push("/error500")
    }
      return (
       <div className="  flex flex-col min-h-screen w-full ">
        <div className='flex  ml-28 mt-10  '>
              <input type='text' placeholder='Search Category...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
            <Search width={15} className='absolute mt-3 ml-4' />
        </div>
        <div className="mt-20  px-24">
          <Table data={data} type="Orders" />
        </div>
       </div>
      )
}

export default Page