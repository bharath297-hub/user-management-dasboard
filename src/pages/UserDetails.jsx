import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useGetUserByIdQuery } from "../api/userApi";

const UserDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetUserByIdQuery(id);

  if (isLoading)
    return (
      <>
        <Navbar />
        <div className="page">Loading...</div>
      </>
    );

  if (error || !data)
    return (
      <>
        <Navbar />
        <div className="page">User not found.</div>
      </>
    );

  return (
    <>
      <Navbar />

      <div className="details-wrapper">
        <div className="details-card">
          <h1 className="details-title">User Details</h1>

          <div className="details-content">
            <h2>{data.name}</h2>
            <p><b>Email:</b> {data.email}</p>
            <p><b>Phone:</b> {data.phone}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
