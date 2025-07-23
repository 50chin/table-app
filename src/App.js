import React, { useState, useEffect } from "react";
import Table from "./components/Table/ Table";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (err) {
      setError("Ошибка загрузки данных");
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Таблица пользователей</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? <p>Загрузка...</p> : <Table users={users} />}
    </div>
  );
}

export default App;
