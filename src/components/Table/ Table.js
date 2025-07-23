import React, { useState } from "react";
import Modal from "../Modal/ Modal.js";
import "./Table.css";

function Table({ users }) {
  const [sortOrder, setSortOrder] = useState({ field: null, order: null });
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const sortUsers = (field) => {
    const order =
      sortOrder.field === field && sortOrder.order === "asc" ? "desc" : "asc";
    const sorted = [...filteredUsers].sort((a, b) => {
      if (a[field] < b[field]) return order === "asc" ? -1 : 1;
      if (a[field] > b[field]) return order === "asc" ? 1 : -1;
      return 0;
    });
    setSortOrder({ field, order });
    setFilteredUsers(sorted);
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th onClick={() => sortUsers("lastName")}>Фамилия</th>
            <th onClick={() => sortUsers("firstName")}>Имя</th>
            <th onClick={() => sortUsers("age")}>Возраст</th>
            <th onClick={() => sortUsers("gender")}>Пол</th>
            <th onClick={() => sortUsers("phone")}>Телефон</th>
            <th>Email</th>
            <th>Страна</th>
            <th>Город</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user, index) => (
            <tr key={index} onClick={() => openModal(user)}>
              <td>{user.lastName}</td>
              <td>{user.firstName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.address.country}</td>
              <td>{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && <Modal user={selectedUser} closeModal={closeModal} />}
    </div>
  );
}

export default Table;
