"use client";

interface PriceResponse {
  nights: number;
  price: number;
  vat: number;
  total: number;
}

const PriceSummary = () => {
  return (
    <div className="flex flex-1 flex-col items-end justify-start">
      <div className="w-[340px]">
        <PriceSummary
          variant="desktop"
          nights={priceInfo?.nights ?? null}
          price={priceInfo?.price ?? null}
          vat={priceInfo?.vat ?? null}
          total={priceInfo?.total ?? null}
        />
      </div>
    </div>
  );
};
export default PriceSummary;
