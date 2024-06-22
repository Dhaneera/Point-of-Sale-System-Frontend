import React, { ReactNode } from 'react'
import SideBar from '../components/SideBar'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='flex flex-row'>
            <div className='flex'>
                <SideBar />
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default layout
