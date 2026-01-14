import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const propertyId = Array.isArray(id) ? Number(id[0]) : Number(id);

  useEffect(() => {
    if (isNaN(propertyId)) return;

    const fetchProperty = async () => {
      try {
        const res = await axios.get(`/api/properties/${propertyId}`);
        setProperty(res.data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [propertyId]);

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}
