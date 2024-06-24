import React from 'react';
import TableRow from './TableRow';
import MobileTableRow from './MobileDataRow';

const Table = (props: any) => {
    console.log(props.data);
    const renderTableHeaders = () => {
        switch (props.type) {
            case "Product":
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>name</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>category</td>                       
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>qty</td>                       
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>price</td> 
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Action</td>               
                    </tr>
                );
            case 'Customers':
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Email</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Username</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Phone Number</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Address</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>Action</td>
                    </tr>
                );
       
            case 'Categories':
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>order id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>name</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>qty</td>
                    </tr>
                );
            case 'Orders':
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>name</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>products</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white'>customer</td>
                    </tr>
                );
            case 'Stocks':
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white '>id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white '>name</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white '>products</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white '>qty</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2 text-white '>price</td>
                    </tr>
                );
            default:
                return (
                    <tr>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2'>id</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2'>name</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2'>category</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2'>qty</td>
                        <td className='w-[16.666%] text-center py-2 bg-[#943138] border-r-2'>price</td>
                    </tr>
                );
        }
    };
    const renderDevHeaders = () => {
        switch (props.type) {
            case "products":
                return (
                    <div>
                        <div className="font-semibold">id </div>
                        <div className="font-semibold">name </div>
                        <div className="font-semibold">category </div>
                        <div className="font-semibold">qty </div>
                        <div className="font-semibold">price</div>
                    </div>
                );
            case 'customers':
                return (

                    <div>
                        <div className="font-semibold">id </div>
                        <div className="font-semibold">total </div>
                        <div className="font-semibold">customerId </div>
                        <div className="font-semibold">status </div>
                    </div>
                );
            case 'Categories':
                return (

                    <div>
                        <div className="font-semibold">id </div>
                        <div className="font-semibold">name </div>
                        <div className="font-semibold">customerId </div>
                        <div className="font-semibold">status </div>
                    </div>
                );
            default:
                return (
                    <div>
                        <div className="font-semibold">id </div>
                        <div className="font-semibold">name </div>
                        <div className="font-semibold">brand </div>
                        <div className="font-semibold"> recommended age </div>
                        <div className="font-semibold">store Id </div>
                    </div>
                );
        }

    };
    let count=0;
    return (
        <>
            <table className='w-[97%] max-h-96 mx-5 mb-10 px-5 rounded-lg border max-md:hidden'>
                <tbody>
                    {renderTableHeaders()}
                    {props.data?.map((element: any) => (
                        <TableRow key={element.id} style={++count % 2 === 0 ? 'bg-white' : ''} id={count} element={element} />
                    ))}
                </tbody>
            </table>

            <div className='md:hidden flex flex-col justify-center items-center'>

                {props.data?.map((element: any) => (
                    <div className='mb-2 p-4 w-[100%] bg-blue-500 rounded-lg flex text-white justify-between'>
                    {renderDevHeaders()}
                    <MobileTableRow key={element.id} element={element}/>
                </div>
                ))}
            </div>

        </>
    );
};

export default Table;
