"use client";

import { usePathname } from "next/navigation";
import { FcTemplate, FcBusinessman, FcNook } from "react-icons/fc";
import { BiSolidDashboard } from "react-icons/bi";
import Link from "next/link";
import styles from "@/src/app/ui/sidebar/styles.module.css";
import Image from "next/image";
import bigdata from "@/public/bigdata.png";
import post from "@/public/post.png";

const Sidebar = () => {
  const pathname = usePathname();
  const page = pathname.split("/").pop();

  return (
    <nav className={styles.container}>
      <span className={styles.title}>{page ? page : "Home"}</span>
      <Image
        src={page == "" ? bigdata : post}
        width={150}
        height={150}
        loading="eager"
        alt="Page Logo"
      />
      <div className={styles.menu}>
        <Link href={"/"} className={styles.link}>
          <button className={styles.button}>
            <BiSolidDashboard size={30} />
            <span>Home</span>
          </button>
        </Link>
        <Link href={"/pages/users"} className={styles.link}>
          <button className={styles.button}>
            <FcBusinessman size={30} />
            <span>Users</span>
          </button>
        </Link>
        <div className={styles.notification}>
          <span className={styles.notify}>
            <FcTemplate size={30} className={styles.notify} />
            Posts
          </span>

          <span className={styles.notify}>
            <FcNook size={30} />
            Comments
          </span>
        </div>
        <span className={styles.posts_amount}>{"10"}</span>
        <span className={styles.comments_amount}>{"5"}</span>
      </div>
      <span className={styles.footer}>User and post data management app</span>
    </nav>
  );
};

export default Sidebar;
