/** @format */
"use client";
import { useLayoutEffect, useState } from "react";
import AutocompleteAddress from "./AutocompleteAddress";

const Booking = () => {
	const [screenHeight, setScreenHeight] = useState(0);
	useLayoutEffect(() => {
		setScreenHeight(window.innerHeight * 0.72);
	}, []); // The empty dependency array ensures this effect runs only once after mounting
	return (
		<div className='p-5'>
			<h2 className='text-[20px] font-semibold'>Booking</h2>
			<div className='border-[1px] p-5 rounded-md' style={{ height: screenHeight }}>
				<AutocompleteAddress />
			</div>
		</div>
	);
};

export default Booking;
