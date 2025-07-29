import React from "react";

interface CheckinSummaryProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  nights: number | null;
  variant: "desktop" | "mobile";
}

/**
 * สรุปวันเช็คอิน เช็คเอาท์ จำนวนคืน และผู้เข้าพัก
 */
const CheckinSummary: React.FC<CheckinSummaryProps> = ({
  variant,
  checkIn,
  checkOut,
  guests,
  nights,
}) => {
  if (variant === "mobile") {
    return (
      <div className="mb-4 flex flex-col items-center gap-8 rounded-xl bg-[#f1f3ff] p-4">
        <div className="flex w-full justify-between">
          <div>
            <div className="text-xs text-gray-500">Check-in</div>
            <div className="text-lg font-semibold">
              {checkIn
                ? new Date(checkIn).toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })
                : "-"}
            </div>
            <div className="text-xs text-gray-500">10am</div>
          </div>
          <div className="flex h-12 w-32 items-center justify-center rounded-md bg-blue-200 px-4 py-2 font-semibold text-blue-600 shadow">
            <span>{nights ? `${nights} night` : "-"}</span>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div>
            <div className="text-xs text-gray-500">Check-out</div>
            <div className="text-lg font-semibold">
              {checkOut
                ? new Date(checkOut).toLocaleDateString(undefined, {
                    weekday: "long",
                    day: "numeric",
                    month: "short",
                  })
                : "-"}
            </div>
            <div className="text-xs text-gray-500">10am</div>
          </div>
          <div className="flex items-center justify-center text-base font-semibold">
            <span>{guests} Adult - 1 room</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 flex items-center gap-8 rounded-xl bg-[#f1f3ff] p-4">
      <div>
        <div className="text-xs text-gray-500">Check-in</div>
        <div className="text-lg font-semibold">
          {checkIn
            ? new Date(checkIn).toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "short",
              })
            : "-"}
        </div>
        <div className="text-xs text-gray-500">10am</div>
      </div>
      <div className="rounded-lg bg-blue-200 p-3 font-semibold text-blue-600 shadow">
        {nights ? `${nights} night` : "-"}
      </div>
      <div>
        <div className="text-xs text-gray-500">Check-out</div>
        <div className="text-lg font-semibold">
          {checkOut
            ? new Date(checkOut).toLocaleDateString(undefined, {
                weekday: "long",
                day: "numeric",
                month: "short",
              })
            : "-"}
        </div>
        <div className="text-xs text-gray-500">10am</div>
      </div>
      <div className="text-base font-semibold">{guests} Adult - 1 room</div>
    </div>
  );
};

export default CheckinSummary;
