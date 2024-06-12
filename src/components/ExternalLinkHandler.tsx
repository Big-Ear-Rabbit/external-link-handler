"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface SearchParams {
  url: string;
}

const ExternalLinkHandler = ({
  searchParams,
}: {
  searchParams: SearchParams;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const [previousPath, setPreviousPath] = useState<string>("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPreviousPath(window.history.state?.url || "/");
    }
  }, []);

  const handleProceed = () => {
    window.location.href = searchParams.url;
  };

  const handleCancel = () => {
    router.push(previousPath);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">
          You are about to leave the site
        </h1>
        <p className="mb-6">
          Are you sure you want to proceed to {searchParams.url}?
        </p>
        <div className="space-x-4">
          <button
            onClick={handleProceed}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
          >
            Proceed
          </button>
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExternalLinkHandler;
