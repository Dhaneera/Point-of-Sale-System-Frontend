'use client'
import Table from "@/app/components/Table";
import DetailView from "@/app/components/DetailCustomer";
import { ChangeEvent, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteCustomerById, getAllCustomers } from "@/app/api/customer_api/api";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer } from "@/app/redux/CustomerSlice";
import { RootState } from "@/app/redux/store";

const Page = () => {
  const selector=useSelector((state:RootState)=>state.customerSlice.customers);
  console.log(selector)
  const [enabled, setEnabled] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch=useDispatch();
  const { data: customersData, isLoading, isError, error } = useQuery({
    queryKey: ['customers'],
    queryFn: getAllCustomers,
    retry: 2,
    retryDelay: 5000,
    enabled: enabled
  });
  useEffect(() => {
    if (customersData) {
      const formattedData = customersData.map((element: any) => ({
        id: element.id,
        name: element.name,
        email: element.mail,
        phone: element.phone,
        address: element.address,
        button:"Delete"
      }));
      dispatch(addCustomer(formattedData))
      setEnabled(false);
    }
  }, [customersData]);

  // const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
  //   const value = event.target.value.toLowerCase();
  //   setSearchTerm(value);
  //   if (value === "") {
  //     setData(customersData.map((element: any) => ({
  //       id: element.id,
  //       name: element.name,
  //       email: element.mail,
  //       phone: element.phone,
  //       address: element.address,
  //       button: <button>Hello World</button>
  //     })));
  //   } else {
  //     setData(customersData.filter((item: any) =>
  //       item.name.toLowerCase().includes(value) ||
  //       item.email.toLowerCase().includes(value) ||
  //       item.phone.toLowerCase().includes(value) ||
  //       item.address.toLowerCase().includes(value)
  //     ).map((element: any) => ({
  //       id: element.id,
  //       name: element.name,
  //       email: element.mail,
  //       phone: element.phone,
  //       address: element.address,
  //       button: "Delete"
  //     })));
  //   }
  // };

  if (isLoading) {
    return <div>Loading....</div>;
  }

  if (isError) {
    console.error(error);
    return <div>Error loading data</div>;
  }

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className='flex ml-28 mt-10'>
        <input
          type='text'
          placeholder='Search Customers'
          className='relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'
          // onChange={handleSearch}
        />
      </div>
      <div className="mt-20 px-24">
        <Table data={selector} type="Customers" />
      </div>
      <div className="flex w-full justify-center">
        <DetailView />
      </div>
    </div>
  );
};

export default Page;
