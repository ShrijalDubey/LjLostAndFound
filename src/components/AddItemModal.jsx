import React from "react";
import styles from "../styles/AddItemModal.module.css";
import { MdClose } from "react-icons/md";
import { FiUpload } from "react-icons/fi";

export default function AddItemModal({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
   
        <div className={styles.header}>
          <h2>Add Lost Item</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <MdClose />
          </button>
        </div>

        <form className={styles.form}>
          <div className={styles.field}>
            <label>Item Name <span>*</span></label>
            <input placeholder="e.g., Blue Water Bottle" />
          </div>

          <div className={styles.field}>
            <label>Where was it found? <span>*</span></label>
            <input placeholder="e.g., Library, 2nd Floor" />
          </div>

          <div className={styles.field}>
            <label>Where to collect? <span>*</span></label>
            <input placeholder="e.g., Security Office, Room 101" />
          </div>

          <div className={styles.field}>
            <label>Description</label>
            <textarea placeholder="Additional details about the item..." />
          </div>

          <div className={styles.uploadBox}>
            <FiUpload />
            <p>Click to upload image</p>
            <span>JPG, PNG up to 5MB</span>
            <input type="file" />
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelBtn} onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className={styles.submitBtn}>
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
