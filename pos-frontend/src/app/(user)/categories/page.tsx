'use client'
import Table from "@/app/components/Table"
import { Search } from 'lucide-react'
import DetailCategory from "@/app/components/DetailCategory"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/redux/store"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllcategories } from "@/app/api/categories_api/api"
import Loading from "../loading/page"
import { useRouter } from "next/navigation"

const Page = () =>{
  const router=useRouter();
  const [enabled, setEnabled] = useState(true);
  const [data,setData]=useState([]);
  const { data: categories, isLoading, isError, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllcategories,
    retry: 2,
    retryDelay: 5000,
    enabled: enabled
  });
  useEffect(() => {
    if (categories) {
      console.log(categories);
      const formattedData = categories.map((element: any) => ({
        id: element.id,
        name: element.name,
        button:"Delete"
      }));
      setData(formattedData)
      setEnabled(false);
    }
  }, [categories]);
  if(isLoading){
   return <Loading/>
  }if(isError){
    router.push('/error500')
  }

      return (
       <div className="  flex flex-col  min-h-screen w-full ">
        <div className='flex  ml-28 mt-10  '>
              <input type='text' placeholder='Search Category...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
            <Search width={15} className='absolute mt-3 ml-4' />
        </div>
        <div className="mt-20  px-24">
          <Table data={data} type="Categories" />
        </div>
        <div className="flex w-full justify-center">
        <DetailCategory/>
        </div>
       </div>
      )
}

export default Page