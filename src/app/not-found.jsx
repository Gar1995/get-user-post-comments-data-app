"use client";
import Image from "next/image";
import React from "react";
import "@/src/app/ui/globals.css";


const Notfound = () => {
  return (
    <div className="notfound">
      <Image src="./notfound.png" height={400} width={500} alt="error image" />
    </div>
  );
};

export default Notfound;
