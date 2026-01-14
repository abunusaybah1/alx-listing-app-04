import { PropertyProps } from "@/interfaces";
import Image from "next/image";

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
	const { image, name, price, rating } = property;

	return (
		<div className="rounded-lg shadow-md overflow-hidden bg-white">
			<Image
				alt={name}
				src={image}
				width={400}
				height={300}
				className="w-full h-48 object-cover"
			/>

			<div className="p-4">
				<h3 className="font-bold text-lg">{name}</h3>
				<p className="text-gray-600 text-sm mt-1">⭐ {rating}</p>
				<p className="font-semibold text-blue-700 mt-2">${price}/night</p>
			</div>
		</div>
	);
};

export default PropertyCard;
