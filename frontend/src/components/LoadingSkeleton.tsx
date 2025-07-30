import React from "react";

interface LoadingSkeletonProps {
  width?: string;
  height?: string;
  rounded?: string;
  className?: string;
  lines?: number;
}

/**
 * Skeleton Loader สำหรับ UI ที่ปรับแต่งได้
 */
export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  width = "w-full",
  height = "h-48",
  rounded = "rounded-lg",
  className = "",
  lines = 1,
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`mb-4 bg-gray-200 dark:bg-gray-700 ${width} ${height} ${rounded}`}
      />
    ))}
  </div>
);
