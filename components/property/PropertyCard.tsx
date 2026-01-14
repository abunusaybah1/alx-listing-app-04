import Image from "next/image";
import { PropertyProps } from "@/interfaces";

interface Props {
  property: PropertyProps;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden bg-white">
      <Image
        src={property.image}
        alt={property.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-bold text-lg">{property.name}</h3>
        <p className="text-gray-600 text-sm mt-1">⭐ {property.rating}</p>
        <p className="font-semibold text-blue-700 mt-2">${property.price}/night</p>
      </div>
    </div>
  );
};

export default PropertyCard;
