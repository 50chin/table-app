import React, { useState } from "react";
import "./Modal.css";

function Modal({ user, closeModal }) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-btn" onClick={closeModal}>
          ×
        </span>
        <h2>Подробная информация</h2>
        <p>
          <strong>ФИО:</strong> {user.firstName} {user.lastName}
        </p>
        <p>
          <strong>Возраст:</strong> {user.age}
        </p>
        <p>
          <strong>Адрес:</strong> {user.address.city}, {user.address.country}
        </p>
        <p>
          <strong>Рост:</strong> {user.height} см
        </p>
        <p>
          <strong>Вес:</strong> {user.weight} кг
        </p>
        <p>
          <strong>Телефон:</strong> {user.phone}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <div className="avatar-container">
          {!isImageLoaded && <div className="avatar-skeleton"></div>}
          <img
            src={user.image}
            alt="avatar"
            onLoad={handleImageLoad}
            style={{ display: isImageLoaded ? "block" : "none" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
