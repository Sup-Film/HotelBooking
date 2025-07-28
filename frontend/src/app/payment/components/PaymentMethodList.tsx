import React from "react";

export interface PaymentMethod {
  id: string;
  label: string;
  icon: React.ReactNode;
  selected?: boolean;
}

interface PaymentMethodListProps {
  methods: PaymentMethod[];
  selectedId: string;
  onSelect: (id: string) => void;
}

const PaymentMethodList: React.FC<PaymentMethodListProps> = ({
  methods,
  selectedId,
  onSelect,
}) => (
  <div className="flex flex-col gap-6">
    {methods.map((method) => (
      <div
        key={method.id}
        className={`flex cursor-pointer items-center gap-4 ${
          selectedId === method.id
            ? "rounded-xl border-2 border-blue-500 bg-white p-6 shadow-md transition-all"
            : "p-0"
        }`}
        onClick={() => onSelect(method.id)}
      >
        <div className="flex h-12 w-12 items-center justify-center">
          {method.icon}
        </div>
        <span className="text-lg font-medium text-gray-800">
          {method.label}
        </span>
        {selectedId === method.id && (
          <span className="ml-auto text-blue-600">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
        )}
      </div>
    ))}
  </div>
);

export default PaymentMethodList;
