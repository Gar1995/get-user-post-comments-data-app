"use client";
import Image from "next/image";
import React from "react";
import "@/src/app/ui/globals.css";


const Loading = () => {
  return (
    <div className="loading">
      <h2>Loading, please wait...</h2>
      <Image src="/loading.png" height={200} width={200} alt="loading" id="loading" loading="eager"/>
    </div>
  );
};

export default Loading;
