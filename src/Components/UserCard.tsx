import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
  id: number,
  avatar: string;
  name: string;
  email: string;
  handleDelete: (id: number) => void
}

export default function UserCard({ id, avatar, name, email, handleDelete }: UserCardProps) {
  const navigate = useNavigate()
  
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center relative" >
      <button
        onClick={()=>handleDelete(id)}
        title="Delete User"
        className=" text-red-500 border border-red-500 hover:bg-red-700 hover:text-white font-medium rounded-lg text-sm p-2 text-center    absolute right-4 top-5 "
      >
        <Trash2 />
      </button>

      <button
        onClick={()=>navigate(`/edit/${id}`)}
        className=" text-yellow-500 border border-yellow-500 hover:bg-yellow-600 hover:text-white font-medium rounded-lg text-sm p-2 text-center absolute right-4 top-20"
        title="Update User Details"
      >
        <Pencil />
      </button>
      <div className="mb-8">
        <img
          className="object-center object-cover rounded-full h-36 w-36"
          src={avatar}
          alt="user image"
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-white font-bold mb-2"> {name} </p>
        <p className="text-base text-gray-400 font-normal"> {email} </p>
      </div>
    </div>
  );
}
