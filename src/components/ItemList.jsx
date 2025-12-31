import React, { useState } from "react";
import AddItemModal from "./AddItemModal";
import styles from '../styles/ItemList.module.css'
import { IoAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { CiCalendarDate } from "react-icons/ci";
import { FiHome } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

export default function ItemList() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Manage Lost Items</h1>
        <p>Add, edit, and manage lost items reported on campus</p>

        <div className={styles.menu}>
          <div>
            <p>Total Items</p>
            <p className={styles.count}>6</p>
          </div>

          <button
            className={styles.addButton}
            onClick={() => setShowModal(true)}
          >     
              <IoAdd /> Add Item
          </button>

        </div>
        {showModal && (
          <AddItemModal onClose={() => setShowModal(false)} />
        )}

      </div>

      <div className={styles.gallery}>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardImageContainer}>
            <img
              src="https://picsum.photos/seed/picsum/536/354"
              alt="Item"
              className={styles.cardImage}
            />
          </div>

          <div className={styles.cardContent}>
            <div>
              <h2>Item Name</h2>
              
              <p><IoLocationOutline /> Location: Found</p>
              <p><FiHome /> Collect from : </p>
              <p><CiCalendarDate /> Date: MM/DD/YYYY</p>
              <hr />
              <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <hr />
            </div>

            <div className={styles.cardButtons}>
              <button className={styles.markButton}><FaCheck /> Mark as Collected</button>
              <button className={styles.deleteButton}><MdDeleteOutline /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
