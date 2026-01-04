import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import styles from "../styles/ItemList.module.css";

export default function ItemCard({ item, role, onDelete, onMarkCollected }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageContainer}>
        <img
          src={item.imageUrl || "https://placehold.co/600x400?text=No+Image"}
          alt={item.itemName}
          className={styles.cardImage}
        />
      </div>

      <div className={styles.cardContent}>
        <div>
          <h2>{item.itemName}</h2>
          <p><IoLocationOutline /> Location: {item.locationLost}</p>
          <p><FiHome /> Collect from: {item.collectFrom}</p>
          <p>
            <CiCalendarDate /> Date found:{" "}
            {new Date(item.createdAt).toLocaleDateString()}
          </p>
          <hr />
          <p className={styles.description}>Description: {item.description}</p>
          <hr />
        </div>

        {role === "authority" && (
          <div className={styles.cardButtons}>
            <button 
              className={styles.markButton}
              onClick={() => onMarkCollected(item._id)}
            >
              <FaCheck /> Mark as Collected
            </button>

            <button
              className={styles.deleteButton}
              onClick={() => onDelete(item._id)}
            >
              <MdDeleteOutline />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}