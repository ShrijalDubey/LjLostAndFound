import React, { useState } from "react";
import styles from "../styles/AddItemModal.module.css";
import { MdClose } from "react-icons/md";
import { FiUpload } from "react-icons/fi";
import axios from "axios";
import { supabase } from "../supabaseClient";


const uploadImage = async (file) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;

  const { error } = await supabase.storage
    .from("lost-items")
    .upload(fileName, file);

  if (error) throw error;

  const { data } = supabase.storage
    .from("lost-items")
    .getPublicUrl(fileName);

  return data.publicUrl;
};

export default function AddItemModal({ onClose }) {
  const [item, setItem] = useState({
    itemName: "",
    description: "",
    locationLost: "",
    collectFrom: "",
    imageUrl: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (imageFile) {
        imageUrl = await uploadImage(imageFile);
      }

      await axios.post("http://localhost:8000/api/items", {
        ...item,
        imageUrl,
      });

      onClose();
    } catch (error) {
      console.error("Error adding item:", error);
    } finally {
      setLoading(false);
    }
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
            <label>
              Item Name <span>*</span>
            </label>
            <input
              name="itemName"
              placeholder="e.g., Blue Water Bottle"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>
              Where was it found? <span>*</span>
            </label>
            <input
              name="locationLost"
              placeholder="e.g., Library, 2nd Floor"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>
              Where to collect? <span>*</span>
            </label>
            <input
              name="collectFrom"
              placeholder="e.g., Security Office, Room 101"
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label>Description</label>
            <textarea
              name="description"
              placeholder="Additional details about the item..."
              onChange={handleChange}
            />
          </div>

          <label className={styles.uploadBox}>
            <FiUpload />
            <p>{imageFile ? imageFile.name : "Click to upload image"}</p>
            <span>JPG, PNG up to 5MB</span>
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImageFile(e.target.files[0])}
            />
          </label>

          <div className={styles.actions}>
            <button
              type="button"
              className={styles.cancelBtn}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Add Item"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
