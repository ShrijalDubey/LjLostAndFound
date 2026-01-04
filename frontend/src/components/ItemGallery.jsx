import React from "react";
import ItemCard from "./ItemCard";
import styles from "../styles/ItemList.module.css";

export default function ItemGallery({ items, role, onDelete }) {
  return (
    <div className={styles.gallery}>
      {items.map((item) => (
        <ItemCard
          key={item._id}
          item={item}
          role={role}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
