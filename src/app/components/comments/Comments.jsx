"use client";
import styles from "@/src/app/ui/comments/styles.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import CommentCard from "./comment/CommentCard";
import { $apiClient } from "@/src/api/axios";
import Image from "next/image";

const Comments = ({ baseURL }) => {
  const [comments, setComments] = useState([]);
  const [error, setError] = useState();

  const searchParams = useSearchParams();
  const commentId = searchParams.get("id");

  useEffect(() => {
    $apiClient
      .get(`${baseURL}/comments?postId=${commentId}`)
      .then((response) => setComments(response.data))
      .catch((error) => setError(error.message));
  }, [baseURL, commentId]);

  const comLength = comments.length;

  return (
    <section className={styles.comments_container}>
      <h1>Post {commentId} comments</h1>
      {comments.map((comment) => (
        <CommentCard comment={comment} key={comment.id} />
      ))}
      <div className={styles.error_logo}>
        {error && (
          <Image src={"/error.png"} height={400} width={500} alt="error logo" />
        )}
      </div>
    </section>
  );
};

export default Comments;
