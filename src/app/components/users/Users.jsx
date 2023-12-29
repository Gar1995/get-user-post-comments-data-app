"use client";
import React, { useEffect, useState } from "react";
import styles from "@/src/app/ui/users/styles.module.css";
import UserCard from "./user/UserCard";
import Image from "next/image";
import { $apiClient } from "@/src/api/axios";

const Users = ({ baseURL }) => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    $apiClient
      .get(`${baseURL}/users`)
      .then((response) => setUsers(response.data))
      .catch((error) => setError(error.message));
  }, [baseURL]);

  return (
    <section className={styles.container}>
      {users.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
      <div className={styles.error_logo}>
        {error && (
          <Image src={"/error.png"} height={400} width={500} alt="error logo" />
        )}
      </div>
    </section>
  );
};

export default Users;
