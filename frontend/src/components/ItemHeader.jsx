import React from "react";
import { IoAdd } from "react-icons/io5";
import styles from "../styles/ItemList.module.css";

export default function ItemHeader({ role, totalItems, onAddClick }) {
  return (
    <>
      <h1>{role === "authority" ? "Manage" : ""} Lost Items</h1>

      <p>
        {role === "authority"
          ? "Add, edit, and manage lost items on campus"
          : "Browse lost items and collect yours from the designated location"}
      </p>

      <div className={styles.menu}>
        <div>
          <p>Total Items</p>
          <p className={styles.count}>{totalItems}</p>
        </div>

        {role === "authority" && (
          <button className={styles.addButton} onClick={onAddClick}>
            <IoAdd /> Add Item
          </button>
        )}
      </div>
    </>
  );
}
