import { useEffect, useState } from "react";

function User(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      response = await response.json()
      setUsers(response)
    }

    getUsers();
  })

  return (
    <div>
      <ul>
        {users?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}

export default User;
