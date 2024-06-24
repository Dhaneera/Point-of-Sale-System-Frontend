
'use client'
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ShoppingBagIcon,
    Cog6ToothIcon,
    HomeIcon,
    LightBulbIcon,
    XMarkIcon,
    UsersIcon,
    ClipboardIcon,
    ShoppingCartIcon,
    Squares2X2Icon,
    PowerIcon,
    UserIcon

} from '@heroicons/react/24/outline'
import Link from 'next/link'
const navigation = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon, current: false },
    { name: 'Product', href: '/product', icon: ShoppingBagIcon, current: false },
    { name: 'Customers', href: '/customers', icon: UserIcon, current: false },
    { name: 'Orders', href: '/orders', icon: ClipboardIcon, current: false },
    { name: 'Users', href: '/admin/users', icon: UsersIcon, current: false },
    { name: 'Categories', href: '/categories', icon: Squares2X2Icon, current: false },
    { name: 'LogOut', href: '/', icon: PowerIcon, current: false },

]


function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
}
export default function StoreNavbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [hoveredItem, setHoveredItem]:any = useState(null);

    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseEnter = (item: any, event: any) => {
        setHoveredItem(item);
        setPosition({
            x: event.currentTarget.getBoundingClientRect().right + 10,
            y: event.currentTarget.getBoundingClientRect().top,
        });
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <>

            <div>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
                        <Transition.Child
                            as={Fragment}
                            enter="transition-opacity ease-linear duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition-opacity ease-linear duration-300"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-900/80" />
                        </Transition.Child>
                        <div className="fixed inset-0 flex">
                            <Transition.Child
                                as={Fragment}
                                enter="transition ease-in-out duration-300 transform"
                                enterFrom="-translate-x-full"
                                enterTo="translate-x-0"
                                leave="transition ease-in-out duration-300 transform"
                                leaveFrom="translate-x-0"
                                leaveTo="-translate-x-full"
                            >
                                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-in-out duration-300"
                                        enterFrom="opacity-0"
                                        enterTo="opacity-100"
                                        leave="ease-in-out duration-300"
                                        leaveFrom="opacity-100"
                                        leaveTo="opacity-0"
                                    >
                                        <div className="absolute left-full top-0 flex w-16 justify-center pt-5 ">
                                            <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                                                <span className="sr-only">Close sidebar</span>
                                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </button>
                                        </div>
                                    </Transition.Child>
                                    {/* Sidebar component, swap this element with another sidebar if you like */}
                                    <div className="flex grow flex-col gap-y-5 overflow-y-aut px-6 pb-4 bg-[#943138]">
                                        <div className="flex h-16 shrink-0 items-center">
                                            <h2 className="text-4xl font-bold ml-[15%]">SAMP<span className="text-white">LE</span></h2>
                                        </div>
                                        <nav className="flex flex-1 flex-col">
                                            <ul role="list" className="flex flex-1 flex-col gap-y-7">
                                                <li>
                                                    <ul role="list" className="-mx-2 space-y-5">
                                                        {navigation.map((item) => (
                                                            <li key={item.name}>
                                                                <Link
                                                                    href={item.href}
                                                                    className={classNames(
                                                                        item.current
                                                                            ? 'bg-[#5a6aff] text-white'
                                                                            : 'text-white hover:text-white hover:bg-[#5a6aff]',
                                                                        'group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold'
                                                                    )}
                                                                >
                                                                    <item.icon
                                                                        className={classNames(
                                                                            item.current ? 'text-white' : 'text-white group-hover:text-white',
                                                                            'h-6 w-6 shrink-0'
                                                                        )}
                                                                        aria-hidden="true"
                                                                    />
                                                                    {item.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                                <li>

                                                </li>

                                                <li className="mt-auto">
                                                    <Link
                                                        href="vendor-support"
                                                        className="group mb-6 -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-[#4c5db4] hover:text-white"
                                                    >
                                                        <LightBulbIcon
                                                            className="h-6 w-6 shrink-0 text-white group-hover:text-white"
                                                            aria-hidden="true"
                                                        />
                                                        Support
                                                    </Link>
                                                    <Link
                                                        href=""
                                                        className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-white hover:bg-[#1837DB] hover:text-white"
                                                    >
                                                        <Cog6ToothIcon
                                                            className="h-6 w-6 shrink-0 text-white group-hover:text-white"
                                                            aria-hidden="true"
                                                        />
                                                        Settings
                                                    </Link>

                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition.Root>


                {/* Static sidebar for desktop */}
                <div className="relative">
                    <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-22 lg:flex-col ">
                        <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-[#943138] px-6 pb-4 rounded-r-xl">
                            <div className="flex h-3 shrink-0 items-center"></div>
                            <nav className="flex flex-1 flex-col ">
                                <ul role="list" className="flex flex-1 flex-col gap-y-7 text-center">
                                    <li>
                                        {navigation.map((item, index) => (
                                            <ul role="list" className="-mx-2 space-y-10 justify-center">
                                                <li
                                                    key={index}
                                                    onMouseEnter={(e) => handleMouseEnter(item, e)}
                                                    onMouseLeave={handleMouseLeave}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current
                                                                ? 'bg-[#eb5959bc] '
                                                                : 'hover:bg-[#eb5959bc]',
                                                            'group flex gap-x-6 rounded-md p-3 mb-6 text-sm leading-6 font-semibold'
                                                        )}
                                                    >
                                                        <div className="flex items-center gap-x-6">
                                                            <item.icon
                                                                className={classNames(
                                                                    item.current ? '' : ' group-hover:text-white',
                                                                    'h-6 w-6 shrink-0 text-white'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        ))}
                                        {hoveredItem && (
                                            <div
                                                className="absolute bg-white text-black p-2 rounded-md shadow-md"
                                                style={{ top: position.y, left: position.x }}
                                            >
                                                {hoveredItem.name}
                                            </div>
                                        )}

                                    </li>

                                </ul>
                            </nav>
                        </div>
                    </div>

                </div>
                <div className="lg:pl-6 bg-[#F0F3FF]">
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  border-gray-200 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
            <button type="button" className="-m-2.5 p-2.5 lg:hidden" onClick={() => setSidebarOpen(true)}>
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>

            </div>
        </>
    )
}