import React from "react";
import { useState } from "react";
import styles from "../styles/AddItemModal.module.css";
import { MdClose } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import axios from "axios";

export default function AddItemModal({ onClose }) {
  const items = {
    itemName: "",
    description: "",
    locationLost: "",
    collectFrom: "",
    imageUrl: "",
  };
  const [item, setItem] = useState(items);

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
    console.log(e.target.name, e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8000/api/items", item)
      .then((response) => {
        console.log("Item added successfully:");

        onClose();
        
      })
      .catch((error) => {
        console.log("Error adding item:", error);
      });
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
   
        <div className={styles.header}>
          <h2>Add Lost Item</h2>
          <button className={styles.closeBtn} onClick={onClose}>
            <MdClose />
          </button>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label>Item Name <span>*</span></label>
            <input onChange={handleChange} name="itemName" placeholder="e.g., Blue Water Bottle" />
          </div>

          <div className={styles.field}>
            <label>Where was it found? <span>*</span></label>
            <input onChange={handleChange} name="locationLost" placeholder="e.g., Library, 2nd Floor" />
          </div>

          <div className={styles.field}>
            <label>Where to collect? <span>*</span></label>
            <input onChange={handleChange} name="collectFrom" placeholder="e.g., Security Office, Room 101" />
          </div>

          <div className={styles.field}>
            <label>Description</label>
            <textarea onChange={handleChange} name="description" placeholder="Additional details about the item..." />
          </div>

          <div className={styles.uploadBox}>
            <FiUpload />
            <p>Click to upload image</p>
            <span>JPG, PNG up to 5MB</span>
            <input onChange={handleChange} name="imageUrl" type="file" />
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
