import React from "react";

export interface PriceSummaryProps {
  nights: number | null;
  price: number | null;
  vat: number | null;
  total: number | null;
  variant: "desktop" | "mobile";
}

/**
 * สรุปราคาทั้งหมดและรายละเอียดค่าธรรมเนียม
 */
const PriceSummary: React.FC<PriceSummaryProps> = ({
  variant,
  nights,
  price,
  vat,
  total,
}) => (
  <div className={variant === "mobile" ? "w-full" : "w-[340px]"}>
    <div className={variant === "mobile" ? "mb-4" : "mb-4 p-6"}>
      <div className="mb-2 flex justify-between text-sm">
        <span>1 room X {nights ?? "-"} night</span>
        <span className="text-blue-500">
          {price !== null ? price.toFixed(2) : "-"}
        </span>
      </div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Total discount</span>
        <span className="text-blue-500">0.00</span>
      </div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Price after discount</span>
        <span className="text-blue-500">
          {price !== null ? price.toFixed(2) : "-"}
        </span>
      </div>
      <div className="mb-2 flex justify-between text-sm">
        <span>Taxes & service fees</span>
        <span className="text-blue-500">
          {vat !== null ? vat.toFixed(2) : "-"}
        </span>
      </div>
      <div className="mt-4 flex justify-between text-lg font-bold">
        <span>Total Amount</span>
        <span className="text-blue-700">
          {total !== null
            ? total.toLocaleString(undefined, { minimumFractionDigits: 2 })
            : "-"}
        </span>
      </div>
    </div>
    <div className={variant === "mobile" ? "rounded-xl bg-white p-4 shadow" : "rounded-xl bg-white p-4 shadow"}>
      <div className="mb-1 font-semibold">Cancellation Charges</div>
      <div className="mb-1 text-sm font-medium">Non Refundable</div>
      <div className="mb-2 text-xs text-gray-500">
        Penalty may be charged by the airline & by MMT based on how close to
        departure date you cancel. View fare rules to know more.
      </div>
      <button className="text-xs text-blue-600 hover:underline">
        VIEW POLICY
      </button>
    </div>
  </div>
);

export default PriceSummary;
