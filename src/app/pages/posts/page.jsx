"use client";
import styles from "@/src/app/ui/posts/styles.module.css";
import Posts from "@/src/app/components/posts/Posts";
import axios from "axios";

export default function PostsPage() {
  const baseURL = "https://jsonplaceholder.typicode.com";

  return (
    <>
      <Posts baseURL={baseURL} />
    </>
  );
}
