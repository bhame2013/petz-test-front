import { NextApiRequest, NextApiResponse } from "next";

import { formatNumberToPercentage, formatNumberToCurrency } from "@/presentation";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<object>
) {
  const tax = 0.03;
  const taxLimit = 0.3;
  const UNITARY_PRICE = 70;

  const generations = req.body.generations;
  const numberPatients = req.body.numberPatients;

  const taxTotal = generations.length > 0 ? Math.max(...generations) * tax : 0;

  const formattedTaxTotal = taxTotal > taxLimit ? taxLimit : taxTotal;

  const subtotal = numberPatients * UNITARY_PRICE;

  const taxValue = formattedTaxTotal * subtotal || 0;

  const total = subtotal + taxValue;

  const body = {
    numberPatients,
    tax: formatNumberToPercentage(tax),
    total: formatNumberToCurrency(total),
    subtotal: formatNumberToCurrency(subtotal),
    taxValue: formatNumberToCurrency(taxValue),
    taxLimit: formatNumberToPercentage(taxLimit),
    unitaryPrice: formatNumberToCurrency(UNITARY_PRICE),
    taxTotal: formatNumberToPercentage(formattedTaxTotal),
  };

  res.status(200).json(body);
}
