import React from "react";

const Header = () => {
	const types = [
		"Rooms",
		"Mansion",
		"Countryside",
		"Beachfront",
		"City View",
		"Mountain View",
	];

	return (
		<header className="w-full bg-white shadow-sm p-4">
			<div className="max-w-7xl mx-auto flex flex-col gap-4">
				<div className="flex justify-between items-center">
					<h1 className="text-xl font-bold text-blue-700">ALX Listing</h1>

					<input
						type="text"
						placeholder="Search..."
						className="w-1/2 border px-3 py-2 rounded-lg"
					/>

					<div className="flex gap-4">
						<button className="text-gray-700">Sign In</button>
						<button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
							Sign Up
						</button>
					</div>
				</div>

				<div className="flex gap-3">
					{types.map((item, index) => (
						<span
							key={index}
							className="px-4 py-2 border rounded-full text-sm cursor-pointer">
							{item}
						</span>
					))}
				</div>
			</div>
		</header>
	);
};

export default Header;
