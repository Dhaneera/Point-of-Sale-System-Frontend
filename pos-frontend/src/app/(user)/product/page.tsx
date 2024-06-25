'use client'
import Table from "@/app/components/Table"
import page from "@/app/page"
import { Search } from 'lucide-react'
import DetailProduct from "@/app/components/DetalProduct"
import { useQuery } from "@tanstack/react-query"
import getAllProducts from "@/app/api/product_api/api"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProduct } from "@/app/redux/productSlice"
import { RootState } from "@/app/redux/store"
import Loading from "../loading/page"
import { useRouter } from "next/navigation"

const Page = () =>{
  const router=useRouter();
  const [isEnable, setEnabled] = useState(true);
  const dispatch=useDispatch();
  const data=useSelector((state:RootState)=>state.productSlice.customers)
  const product=useQuery({
    queryKey: ['products'],
    queryFn: () => getAllProducts(),
    retry:2,
    retryDelay:5000,
    enabled:isEnable
  })
  if(product.isLoading){
    return <Loading/>
  }
  if(product.isError){
    router.push("/error500")
  }

  useEffect(() => {
    if (product.data) {
      const formattedData = product.data?.map((element: any) => (
        {
        id: element.id,
        name: element.name,
        category: element.category.name,
        qty: element.quantity,
        desc:element.desc,
        price: element.price,
        button:"Delete"
      }));
      setEnabled(false);
      console.log(product.data)
      dispatch(addProduct(formattedData))
      
    }
  }, [product.data]);

      return (
       <div className="  flex flex-col min-h-screen w-full ">
        <div className='flex  ml-28 mt-10  '>
              <input type='text' placeholder='Search Category...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
            <Search width={15} className='absolute mt-3 ml-4' />
            <div className="flex gap-5  ml-auto  mr-28">
                
                <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'> Delete Product</button>
            </div>
        </div>
        <div className="mt-20  px-24">
          <Table data={data} type="Product" />
        </div>
        <div className="flex w-full justify-center">
        <DetailProduct/>
        </div>
       </div>
      )
}

export default Page