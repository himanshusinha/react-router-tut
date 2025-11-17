import { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, []);
  const getUsers = async () => {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();
    setUsers(data.users);
  };
  return (
    <div>
      <h2>
        {users.map((user) => (
          <div>
            <h2 key={user.id}>{user.firstName}</h2>
            <h2 key={user.id}>{user.lastName}</h2>
            <h2 key={user.id}>{user.email}</h2>
          </div>
        ))}
      </h2>
    </div>
  );
}
