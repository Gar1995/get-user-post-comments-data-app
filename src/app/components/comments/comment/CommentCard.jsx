import styles from "@/src/app/ui/comments/comment/styles.module.css";

const CommentCard = ({ comment }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <ul>
          <li>
            <p>
              <b>Post:</b> {comment.postId}
            </p>
            <p>
              <b>Comment:</b> {comment.id}
            </p>
          </li>
          <li>
            <p>
              <b>Name:</b> {comment.name}
            </p>
          </li>
          <li>
            <p>
              <b>Email:</b> {comment.email}
            </p>
          </li>
          <li>
            <p>
              <b>body:</b> {comment.body}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CommentCard;
