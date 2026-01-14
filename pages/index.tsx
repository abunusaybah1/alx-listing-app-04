import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";
import PropertyCard from "@/components/property/PropertyCard";

export default function Home() {
	const filters = [
		"Top Villa",
		"Self Checkin",
		"Mountain View",
		"Beachfront",
		"Luxury",
	];

	return (
		<div>
			{/* HERO */}
			<section
				className="w-full h-[60vh] bg-cover bg-center flex items-center justify-center text-white"
				style={{
					backgroundImage: "url('/hero.jpg')",
				}}>
				<div className="text-center bg-black bg-opacity-40 p-6 rounded-lg">
					<h1 className="text-4xl font-bold">Find your favorite place here!</h1>
					<p className="mt-3 text-lg">
						The best prices for over 2 million properties worldwide.
					</p>
				</div>
			</section>

			{/* FILTERS */}
			<section className="max-w-7xl mx-auto py-6">
				<div className="flex gap-3 flex-wrap">
					{filters.map((item, index) => (
						<Pill key={index} label={item} />
					))}
				</div>
			</section>

			{/* PROPERTY LISTING */}
			<section className="max-w-7xl mx-auto py-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{PROPERTYLISTINGSAMPLE.map((property, index) => (
					<PropertyCard key={index} {...property} />
				))}
			</section>
		</div>
	);
}
