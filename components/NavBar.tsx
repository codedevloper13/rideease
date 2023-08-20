/** @format */

import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const NavBar = () => {
	return (
		<div className='flex justify-between p-3 px-10 border-b-[1px] shadow-sm'>
			<div className='flex gap-10 items-center'>
				<Image src='/rideease-icon.png' alt='logo' width={300} height={50} unoptimized />
				<div className=' hidden md:flex gap-6 mt-2'>
					<h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Home</h2>
					<h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>History</h2>
					<h2 className='hover:bg-gray-100 p-2 rounded-md cursor-pointer transition-all'>Help</h2>
				</div>
			</div>
			<UserButton afterSignOutUrl='/' />
		</div>
	);
};

export default NavBar;
