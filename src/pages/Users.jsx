import Navbar from "../components/Navbar";
import { useGetUsersQuery } from "../api/userApi";
import { Link } from "react-router-dom";

const Users = () => {
  const { data, isLoading, error } = useGetUsersQuery();

  if (isLoading)
    return (
      <>
        <Navbar />
        <div className="page">Loading users...</div>
      </>
    );

  if (error)
    return (
      <>
        <Navbar />
        <div className="page">Failed to load users.</div>
      </>
    );

  return (
    <>
      <Navbar />
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h1 className="dashboard-title">Users List</h1>

          <div className="users-grid">
            {data.map((user) => (
              <Link
                to={`/users/${user.id}`}
                key={user.id}
                className="user-card"
              >
                <h2>{user.name}</h2>
                <p><b>ID:</b> {user.id}</p>
                <p><b>Email:</b> {user.email}</p>
                <p><b>Phone:</b> {user.phone}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
