import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTYLISTINGSAMPLE } from "@/constants";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const index = Array.isArray(id) ? Number(id[0]) : Number(id);

  if (isNaN(index) || index < 0 || index >= PROPERTYLISTINGSAMPLE.length) {
    return res.status(404).json({ message: "Property not found" });
  }

  res.status(200).json(PROPERTYLISTINGSAMPLE[index]);
}
