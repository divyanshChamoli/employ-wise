import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const LOGIN_URL = "/api/login";

  const navigate = useNavigate();

  const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });

  type LoginSchematype = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginSchematype>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<LoginSchematype> =async (data) => {
    try {
      const res = await axios.post(BASE_URL + LOGIN_URL, {
        email: data.email,
        password: data.password
      });
      if(res.data.token){
        localStorage.setItem("token", res.data.token);
      }
      if(res.data.error){
        setError("root", res.data.error)
      }
      navigate("/");
    } catch (err) {
      console.log("Hello2")
        if(err instanceof Error){
            setError("root", err)
        }
    }
  };

  return (
    <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
      <div className=" bg-white h-96 w-80 rounded-lg flex justify-center items-start">
        <div className="h-[90%] w-5/6 flex flex-col justify-evenly">
          <div className=" font-bold text-4xl self-center ">Login</div>
          <div className=" text-neutral-500 font-semibold text-center">
            Enter your credentials to access your account
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className=" text-left text-sm font-bold ">Email</div>
            <input
              {...register("email")}
              className=" border border-gray-400 w-full p-1 my-2 rounded-sm "
              type="text"
              placeholder="johndoe@example.com"
            />
            {errors.email && <p className="text-red-500 pb-2 text-sm font-semibold">{errors.email.message}</p>}
            
            <div className=" text-left text-sm font-bold ">Password</div>
            <input
              {...register("password")}
              className=" border border-gray-400 w-full p-1 my-2 rounded-sm "
              type="password"
              placeholder=""
            />
            {errors.password && <p className="text-red-500 pb-2 text-sm font-semibold">{errors.password.message}</p>}
            
            <button
              type="submit"
              className="text-white bg-black hover:bg-gray-900 font-medium w-full rounded-md text-sm px-5 py-2.5 me-2 mb-2"
            >
              Enter
            </button>
            {errors.root && <p className="text-red-500 bg-white pb-2 font-semibold">{errors.root.message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
