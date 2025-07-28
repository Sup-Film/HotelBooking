const GuestForm = ({ variant }: { variant: "desktop" | "mobile" }) => {
  if (variant === "mobile") {
    return (
      <div className="my-4">
        <div className="mb-2 font-medium">Guest Details</div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="First Name"
          />
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Last Name"
          />
        </div>
        <div className="mb-2 flex flex-col gap-2">
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="E-mail address"
          />
          <input
            className="rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
            placeholder="Mobile number"
          />
        </div>
        <button className="mb-6  text-sm hover:underline">
          Add Guest +
        </button>
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
      <div className="mb-2 flex gap-2">
        <input
          className="flex-1 rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
          placeholder="First Name"
        />
        <input
          className="flex-1 rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
          placeholder="Last Name"
        />
      </div>
      <div className="mb-2 flex gap-2">
        <input
          className="flex-1 rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
          placeholder="E-mail address"
        />
        <input
          className="flex-1 rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300"
          placeholder="Mobile number"
        />
      </div>
      <button className="mb-2 text-sm hover:underline">
        Add Guest +
      </button>
      <div>
        <div className="mb-1 text-sm">Special Request (optional)</div>
        <textarea className="min-h-[60px] w-full rounded border border-blue-100 px-3 py-2 outline-none focus:border-4 focus:border-blue-300" />
      </div>
    </div>
  );
};
export default GuestForm;
