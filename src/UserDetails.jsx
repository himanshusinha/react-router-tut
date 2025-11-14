import { Link, useParams } from "react-router";

const UserDetails = () => {
  const paramsData = useParams();
  console.log(paramsData);
  return (
    <div style={{ marginLeft: 20 }}>
      <h1>User Details</h1>
      <h2>User Id : {paramsData.id}</h2>
      <h3>
        <Link to="/users">Back</Link>
      </h3>
    </div>
  );
};
export default UserDetails;
