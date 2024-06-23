import React, { ReactNode } from 'react'
import SideBar from '../components/SideBar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-row w-screen bg-[#f0f3ff]'>
            <div className='flex w-[6%]'>
                <SideBar />
            </div>
            <div className='w-[94%]'>
                {children}
            </div>
        </div>
    )
}

export default layout
