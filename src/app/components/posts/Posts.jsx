import styles from "@/src/app/ui/posts/styles.module.css";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PostCard from "./post/PostCard";
import { $apiClient } from "@/src/api/axios";
import Image from "next/image";

const Posts = ({ baseURL }) => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState();

  const searchParams = useSearchParams();
  const postId = searchParams.get("id");

  useEffect(() => {
    $apiClient
      .get(`${baseURL}/posts?userId=${postId}`)
      .then((response) => setPosts(response.data))
      .catch((error) => setError(error.message));
  }, [baseURL, postId]);

  return (
    <section className={styles.posts_container}>
      <div>
        <h1>User {postId} posts</h1>
      </div>
      <div className={styles.posts_container}>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
        <div className={styles.error_logo}>
          {error && (
            <Image
              src={"/error.png"}
              height={400}
              width={500}
              alt="error logo"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Posts;
