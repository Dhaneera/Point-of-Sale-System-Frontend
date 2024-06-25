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