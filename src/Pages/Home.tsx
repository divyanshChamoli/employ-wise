import { useEffect, useState } from "react";
import UserCard from "../Components/UserCard";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
  email: string;
}

export default function Home() {
  const navigate = useNavigate();

  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const GET_USERS_URL = "/api/users";
  const DELETE_USER_URL = "/api/users/";

  const [users, setUsers] = useState<User[] | undefined>(undefined);
  const [pageId, setPageId] = useState(1);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const userData = await axios.get(BASE_URL + GET_USERS_URL + `?page=${pageId}`);
        setUsers(userData.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUserData();
  }, [pageId]);

  const handleDelete = async (id: number) => {
    try {
      const deleted = await axios.delete(BASE_URL + DELETE_USER_URL + id);
      const filteredUsers = users?.filter((user) => user.id !== id);
      setUsers(filteredUsers);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full bg-gray-800 ">
      <div className="w-4/5 mx-auto py-12">
        <div className="text-center pb-12">
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
            User List
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users
            ? users.map((user) => {
                return (
                  <UserCard
                    key={user.id}
                    id={user.id}
                    avatar={user.avatar}
                    name={user.first_name + " " + user.last_name}
                    email={user.email}
                    handleDelete={() => handleDelete(user.id)}
                  />
                );
              })
            : null}
        </div>  
        <div className="flex w-full py-5 justify-center ">
          <button className="border border-black bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l" onClick={()=>setPageId(1)}>
            1
          </button>
          <button className="border border-black bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"  onClick={()=>setPageId(2)} >
            2
          </button>
        </div>
      </div>
    </div>
  );
}
