import { Link } from "react-router";

const Users = () => {
  const usersData = [
    {
      id: 1,
      name: "Anil",
    },
    {
      id: 2,
      name: "Bob",
    },
    {
      id: 3,
      name: "Peter",
    },
    {
      id: 4,
      name: "Tom",
    },
    {
      id: 5,
      name: "Kevin",
    },
  ];
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User List Page</h1>
      {usersData.map((item, index) => (
        <div key={index}>
          <h3>
            <Link to={"/users/" + item.id}>{item.name}</Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
