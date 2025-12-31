import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import styles from '../styles/ItemList.module.css'
import { IoAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";
import { useEffect } from "react";
import axios from "axios";


export default function ItemList() {
  const [showModal, setShowModal] = useState(false);
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
  try {
    const response = await axios.get('http://localhost:8000/api/items');
    setItems(response.data);
  } catch (error) {
    console.log('Error fetching items:', error);
  }
};

 useEffect(() => {
  const fetchItems = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8000/api/items'
      );
      setItems(response.data);
    } catch (error) {
      console.log('Error fetching items:', error);
    }
  };

  fetchItems();
}, []);

  const totalItems = items.length;

  const deleteItem = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this item?");
  if (!confirmDelete) return; // user canceled

    try {
      await axios.delete(`http://localhost:8000/api/items/${id}`);
      setItems(items.filter((item) => item._id !== id));
    }
    catch (error) {
      console.log('Error deleting item:', error);
    }
  }


  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Manage Lost Items</h1>
        <p>Add, edit, and manage lost items reported on campus</p>

        <div className={styles.menu}>
          <div>
            <p>Total Items</p>
            <p className={styles.count}>{totalItems}</p>
          </div>

          <button
            className={styles.addButton}
            onClick={() => setShowModal(true)}
          >     
              <IoAdd /> Add Item
          </button>

        </div>
        {showModal && (
          <AddItemModal
            onClose={() => {
              setShowModal(false);
              fetchItems(); 
            }}
          />
        )}

      </div>

      <div className={styles.gallery}>
        {items.map((item) => {
          return (
            <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src={item.imageUrl || "https://picsum.photos/536/354"}
              alt={item.itemName}
              className={styles.cardImage}
            />

          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>{item.itemName}</h2>
              
              <p><IoLocationOutline /> Location: {item.locationLost}</p>
              <p><FiHome /> Collect from : {item.collectFrom}</p>
              <p>
                <CiCalendarDate /> Date:{" "}
                {new Date(item.createdAt).toLocaleDateString()}
              </p>
              <hr />
              <p>Description: {item.description}</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button onClick={()=>deleteItem(item._id)} className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        );
      })}
      </div>
    </div>
  )
}
