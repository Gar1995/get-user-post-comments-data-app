"use client";
import styles from "@/src/app/ui/comments/styles.module.css";
import Comments from "@/src/app/components/comments/Comments";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { $apiClient } from "@/src/api/axios";

export default function CommentsPage() {
const baseURL = "https://jsonplaceholder.typicode.com";

  return (
    <>
      <Comments baseURL={baseURL} />
    </>
  );
}
