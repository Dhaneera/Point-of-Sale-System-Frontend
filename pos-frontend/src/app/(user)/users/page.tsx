import Table from "@/app/components/Table"
import page from "@/app/page"
import { Search } from 'lucide-react'
import DetailUsers from "@/app/components/DetailsUsers"

const Page = () =>{
    
    const data = [
        { id: 1, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 2, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 3, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 4, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 5, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 6, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 7, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 8, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 9, name: "dfd", location: "dfdf", description: "difhidfhh" },
        { id: 10, name: "dfd", location: "dfdf", description: "difhidfhh" }
      ]

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
          <Table data={data} type="Users" />
        </div>
        <div className="flex w-full justify-center">
        <DetailUsers/>
        </div>
       </div>
      )
}

export default Page