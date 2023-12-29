"use client";
import Users from "@/src/app/components/users/Users";

export default function UsersPage() {
      const baseURL = "https://jsonplaceholder.typicode.com";

  return (
    <>
      <Users baseURL={baseURL} />
    </>
  );
}
