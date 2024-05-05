"use client"
import React from "react";

const Error = ({ statusCode, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold text-red-600 mb-4">Error</h1>
      <p className="text-lg text-gray-800 mb-8">Código de error: {statusCode || 500}</p>
      <p className="text-sm text-gray-500">{message || "Algo salio mal" }</p>
    </div>
  );
};

export default Error;
