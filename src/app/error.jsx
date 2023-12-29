'use client'
import Image from "next/image";
import React from "react";
import "@/src/app/ui/globals.css";


const Error = () => {
  return (
    <div className="error">
      <Image src="./error.png" height={400} width={500} alt="error image"/>
    </div>
  );
};

export default Error;
