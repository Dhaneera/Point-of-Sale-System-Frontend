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
      setIsEnabled(false);
    }
  }, [categoriesData, productsData]);

  if (categoriesLoading || productsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='bg-[#F0F3FF] flex h-screen'>
      <div className='w-[70%] h-full'>
        <div className='flex w-full justify-between mt-5'>
          <div className='w-[80%] flex ml-4'>
            <input
              type='text'
              placeholder='Search anything...'
              className='relative rounded-full placeholder:text-color-black h-12 px-5 pl-5 placeholder:pl-8 py-1 w-[30%] bg-white'
            />
            <Search width={15} className='absolute top-8 ml-4' />
          </div>
          <button className='rounded-full h-12 border-2 px-5 mr-4 border-red-500 text-white font-bold bg-red-800 truncate'>
            Orders
          </button>
        </div>
        <div className='flex'>
          {Array.isArray(formData) && formData.map((element:any) => (
            <Category key={element.id} info={element} />
          ))}
        </div>
        <div>
          <h3 className='mt-10 ml-6 text-3xl font-bold'>Burger Town Menu</h3>
        </div>
        <div className='grid grid-cols-4 h-max ml-6 mt-6'>
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
