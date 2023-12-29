"use client";

import styles from "@/src/app/ui/users/user/styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaMobileRetro } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { SiWebstorm } from "react-icons/si";

const UserCard = ({ user }) => {
  const { id, name, username, email, phone, website, company } = user;
  return (
    <Link
      href={{
        pathname: `/pages/posts`,
        query: { id },
      }}
    >
      <div className={styles.user_card}>
        <div className={styles.card_num}>User card: {id}</div>
        <div className={styles.infoContainer}>
          <div className={styles.imgContainer}>
            <Image src="/noavatar.jpg" alt="user" height={100} width={100} />
          </div>
          <span>{username}</span>
        </div>
        <p className={styles.activity}>
          <span>Posts</span> | <span>Comments</span>
        </p>
        <div>
          <div className={styles.info}>
            <p>
              <FaUser size="20" fill="#657785" />
              {name}
            </p>
            <p>
              <IoMail size="20" fill="#657785" />
              {email}
            </p>
            <p>
              <FaAddressCard size="20" fill="#657785" />
              {user?.address.city}
            </p>
            <p>
              <FaMobileRetro size="20" fill="#657785" />
              {phone}
            </p>
            <p>
              <MdWork size="20" fill="#657785" />
              {company.name}
            </p>
            <p>
              <span>
                <SiWebstorm size="20" fill="#657785" />
              </span>
              {website}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
