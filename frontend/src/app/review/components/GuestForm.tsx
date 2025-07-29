export interface GuestDetails {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  specialRequest: string;
}

interface GuestFormProps {
  variant: "desktop" | "mobile";
  guestDetails: GuestDetails;
  onDetailsChange: (field: keyof GuestDetails, value: string) => void;
  errors: Partial<GuestDetails>;
}

const GuestForm = ({
  variant,
  guestDetails,
  onDetailsChange,
  errors,
}: GuestFormProps) => {
  if (variant === "mobile") {
    return (
      <div className="my-4">
        <div className="mb-2 font-medium">Guest Details</div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="First Name"
            value={guestDetails.firstName}
            onChange={(e) => onDetailsChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.firstName}
            </p>
          )}
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Last Name"
            value={guestDetails.lastName}
            onChange={(e) => onDetailsChange("lastName", e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.lastName}
            </p>
          )}
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="E-mail address"
            value={guestDetails.email}
            onChange={(e) => onDetailsChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.email}
            </p>
          )}
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Mobile number"
            value={guestDetails.mobile}
            onChange={(e) => onDetailsChange("mobile", e.target.value)}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.mobile}
            </p>
          )}
        </div>
        <button className="mb-6 text-sm hover:underline">Add Guest +</button>
        <div>
          <div className="mb-1 text-sm">Special Request (optional)</div>
          <textarea className="min-h-[60px] w-full rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300" />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4">
      <div className="mb-2 font-medium">Guest Details</div>
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="First Name"
            value={guestDetails.firstName}
            onChange={(e) => onDetailsChange("firstName", e.target.value)}
          />
          {errors.firstName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.firstName}
            </p>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Last Name"
            value={guestDetails.lastName}
            onChange={(e) => onDetailsChange("lastName", e.target.value)}
          />
          {errors.lastName && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>
      <div className="mb-2 grid grid-cols-2 gap-4">
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="E-mail address"
            value={guestDetails.email}
            onChange={(e) => onDetailsChange("email", e.target.value)}
          />
          {errors.email && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.email}
            </p>
          )}
        </div>
        <div className="flex flex-1 flex-col">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Mobile number"
            value={guestDetails.mobile}
            onChange={(e) => onDetailsChange("mobile", e.target.value)}
          />
          {errors.mobile && (
            <p className="mt-1 text-xs font-bold text-red-500">
              {errors.mobile}
            </p>
          )}
        </div>
      </div>
      <button className="mb-2 text-sm hover:underline">Add Guest +</button>
      <div>
        <div className="mb-1 text-sm">Special Request (optional)</div>
        <textarea className="min-h-[60px] w-full rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300" />
      </div>
    </div>
  );
};
export default GuestForm;
