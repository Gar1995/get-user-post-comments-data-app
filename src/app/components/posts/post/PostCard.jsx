import styles from "@/src/app/ui/posts/post/styles.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post}) => {
const id = post.id

  return (
    <Link
      href={{
        pathname: `/pages/comments`,
        query: { id },
      }}
    >
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <h3>User</h3>
          <span>{post.userId}</span>
          <h3>Post</h3>
          <span>{post.id}</span>
          <h3>Title</h3>
          <p>{post.title}</p>
          <h3>Body</h3>
          <p>{post.body}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
