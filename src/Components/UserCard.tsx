
interface UsercardProps{
  avatar: string,
  name: string,
  email: string
}

export default function UserCard({avatar, name, email} : UsercardProps ) {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
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
