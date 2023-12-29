"use client";
import styles from "@/src/app/ui/dashboard/styles.module.css";
import Link from "next/link";
import { IoIosPeople } from "react-icons/io";

export default function DashboardPage() {
  return (
    <main className={styles.container}>
      <h1>Welcome dear guest</h1>
      <h2>
        Here You can dynamically get users, users posts and post comments data
        from `Json.placeholder` free online REST API...
      </h2>
      <Link href="/pages/users" className={styles.start}>
        <p>
          <IoIosPeople size={30} /> <span>Get users</span>
        </p>
      </Link>
    </main>
  );
}
