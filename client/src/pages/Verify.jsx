import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Verify = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <section className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      </section>
    );
  }

  return (
    <section className="container max-w-full md:max-w-7xl mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold">Verify Page</h1>
      <p>Success: {success}</p>
      <p>Order ID: {orderId}</p>
    </section>
  );
};

export default Verify;
