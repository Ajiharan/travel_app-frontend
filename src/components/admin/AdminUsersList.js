import React from "react";
import "./AdminUserList.css";
import { useStateValue } from "../../StateProvider";
const AdminUsersList = () => {
  const [{ userDetails }] = useStateValue();
  return (
    <div className="admin__userList">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">picture</th>
            <th scope="col">type</th>
            <th scope="col">experience</th>
            <th scope="col">userName</th>
            <th scope="col">email</th>
            <th scope="col">price</th>
            <th scope="col">rating</th>
          </tr>
        </thead>
        <tbody>
          {userDetails.map(
            ({
              _id,
              profilePic,
              experience,
              rating,
              userName,
              email,
              type,
              price,
            }) => (
              <tr key={_id}>
                <td>
                  <img className="thumbnail" src={profilePic} alt={userName} />
                </td>
                <td>{type}</td>
                <td>{experience}</td>
                <td>{userName}</td>
                <td>{email}</td>
                <td>{price}</td>
                <td>{rating}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminUsersList;
