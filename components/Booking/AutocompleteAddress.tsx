/** @format */

import React from "react";

const AutocompleteAddress = () => {
	return (
		<div className='mt-5'>
			<div>
				<label className='text-gray-400'>Where From?</label>
				<input
					type='text'
					className='mt-2 bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-custom-yellow'
					placeholder='Where from?'
				/>
			</div>

			<div className="mt-3">
				<label className='text-gray-400'>Where To?</label>
				<input
					type='text'
					className='mt-2 bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-custom-yellow'
					placeholder='Where To?'
				/>
			</div>
		</div>
	);
};

export default AutocompleteAddress;
