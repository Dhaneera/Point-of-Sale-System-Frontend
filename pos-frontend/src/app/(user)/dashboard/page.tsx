'use client'
import React, { useEffect, useState } from 'react';
import { Key, Search } from 'lucide-react';
import { useQuery } from '@tanstack/react-query';
import { getAllcategories } from '@/app/api/categories_api/api';
import Category from '@/app/components/Category';
import MealCard from '@/app/components/MealCard';
import Cart from '@/app/components/Cart';
import getAllProducts from '@/app/api/product_api/getAll.api';

const Page = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [formData, setFormData] = useState([]);
  const [pro, setPro] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [hidden, setHidden] = useState(false);
  const [category,setCategory]=useState("")

  const { data: categoriesData, isLoading: categoriesLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: getAllcategories,
    staleTime: Infinity,
    enabled: isEnabled,
  });

  const { data: productsData, isLoading: productsLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: Infinity,
    enabled: isEnabled,
  });

  useEffect(() => {
    if (categoriesData && productsData) {
      setFormData(categoriesData);
      setPro(productsData);
      setAllProducts(productsData);
      setIsEnabled(false);
    }
  }, [categoriesData, productsData]);

  if (categoriesLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  function handleSearch(e:any) {
    const value = e.target.value;
    setSearchTerm(value);
    setHidden(true);
    if (value === "") {
        setPro(() => {
            return [
                ...allProducts
            ];
        });
    } else {
        setPro(() => {
            return allProducts.filter((item:any) => {
                return item.name.toLowerCase().includes(value.toLowerCase());
            });
        });
    }
  }
  function chooseCategory(e:any){
    const value=e.target.name;
    if(category==value){
        setCategory("")
        setPro(() => {
            return [
                ...allProducts
            ];
        });
    }else{
        setCategory(value)
        setPro(() => {
            return allProducts.filter((item:any) => {
                return item.category.name.toLowerCase().includes(value.toLowerCase());
            });
        });
    }
  }

  return (
    <div className='bg-[#F0F3FF] w-full flex h-screen'>
      <div className='w-[80%] h-full'>
        <div className='flex w-full justify-between mt-5'>
          <div className='w-[80%] flex ml-4'>
            <input
              type='text'
              placeholder='Search anything...'
              className='relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'
              onChange={handleSearch}
            />
            <Search width={15} className={`absolute top-8 ml-4 ${hidden === true ? "hidden" : ""}`} />
          </div>
          <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'>
            Orders
          </button>
        </div>
        <div className='flex'>
          {Array.isArray(formData) && formData.map((element:any) => (
            <Category key={element.name} active={category} function={chooseCategory} info={element} />
          ))}
        </div>
        <div>
          <h3 className='mt-10 ml-6 text-3xl font-bold'>Burger Town Menu</h3>
        </div>
        <div className='grid grid-cols-3 h-max ml-6 mt-6'>
          {Array.isArray(pro) && pro.map((element:any) => (
            <MealCard key={element.id} info={element} />
          ))}
        </div>
      </div>
      <div className='w-[30%] h-full bg-white'>
        <Cart />
      </div>
    </div>
  );
};

export default Page;
