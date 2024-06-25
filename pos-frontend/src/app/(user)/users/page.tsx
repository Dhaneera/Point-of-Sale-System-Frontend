'use client'
import Table from "@/app/components/Table"
import page from "@/app/page"
import { Search } from 'lucide-react'
import DetailUsers from "@/app/components/DetailsUsers"
import { useRouter } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/app/redux/store"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getAllOrders } from "@/app/api/orders_api/api"
import Loading from "../loading/page"
import { addUser } from "@/app/redux/userSlice"
import { getAllUsers } from "@/app/api/users_api/api"


const Page = () => {
  const router = useRouter();
  const selector = useSelector((state: RootState) => state.userSlice.users);
  console.log(selector);
  const [enabled, setEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const { data: customersData, isLoading, isError, error } = useQuery({
    queryKey: ['users'],
    queryFn: getAllUsers,
    retry: 2,
    retryDelay: 5000,
    enabled: enabled
  });

  if (isError) {
    router.push("/error500")
  }
  useEffect(() => {
    const user=localStorage.getItem('privilage');
    if (customersData && user=="ADMIN" ) {
      const formattedData = customersData?.map((element: any) => (
        {
          id: element.id,
          name: element.username,
          role:element.roles[0],
          button: "Delete"
        }));
      dispatch(addUser(formattedData))
      setEnabled(false);
    }
  }, [customersData]);

  if (isLoading) {
    return <Loading />
  }
  return (
    <div className="  flex flex-col min-h-screen w-full ">
      <div className='flex  ml-28 mt-10  '>
        <input type='text' placeholder='Search User...' className=' relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'></input>
        <Search width={15} className='absolute mt-3 ml-4' />
        <div className="flex gap-5  ml-auto  mr-28">
          <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'> Delete User</button>
        </div>
      </div>
      <div className="mt-20  px-24">
        <Table data={selector} type="Users" />
      </div>
      <div className="flex w-full justify-center">
        <DetailUsers />
      </div>
    </div>
  )
}

export default Page