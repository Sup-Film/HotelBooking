"use client";

interface PriceResponse {
  nights: number;
  price: number;
  vat: number;
  total: number;
}

interface PriceSummaryProps {
  variant?: "desktop" | "mobile";
  nights?: number | null;
  price?: number | null;
  vat?: number | null;
  total?: number | null;
}

const PriceSummary = ({
  variant = "desktop",
  nights,
  price,
  vat,
  total,
}: PriceSummaryProps) => {
  return (
    <div className="flex flex-1 flex-col items-end justify-start">
      <div className="w-[340px]">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h3 className="mb-4 text-lg font-semibold">Price Summary</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Nights:</span>
              <span>{nights ?? "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span>Price:</span>
              <span>${price ?? "N/A"}</span>
            </div>
            <div className="flex justify-between">
              <span>VAT:</span>
              <span>${vat ?? "N/A"}</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total ?? "N/A"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceSummary;
