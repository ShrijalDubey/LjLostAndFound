import React, { useEffect, useState } from "react";
import axios from "axios";
import AddItemModal from "../components/AddItemModal";
import TopBrand from "../components/TopBrand";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ItemHeader from "../components/ItemHeader";
import ItemGallery from "../components/ItemGallery";
import styles from "../styles/ItemList.module.css";

export default function ItemList({ role, onLogout }) {
  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const fetchItems = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/items");
      setItems(res.data);
    } catch (err) {
      console.error("Error fetching items:", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const deleteItem = async (id) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;

    try {
      await axios.delete(`http://localhost:8000/api/items/${id}`);
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };

  return (
    <>
      <TopBrand />
      <Navbar role={role} onLogout={onLogout} />

      <div className={styles.main}>
        <div className={styles.container}>
          <ItemHeader
            role={role}
            totalItems={items.length}
            onAddClick={() => setShowModal(true)}
          />
        </div>

        <ItemGallery
          items={items}
          role={role}
          onDelete={deleteItem}
        />
      </div>

      {showModal && (
        <AddItemModal
          onClose={() => {
            setShowModal(false);
            fetchItems();
          }}
        />
      )}

      <Footer />
    </>
  );
}
