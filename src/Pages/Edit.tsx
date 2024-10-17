import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Edit() {
  const { id } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const EDIT_URL = `/api/users/${id}`;
  const GET_USER_URL = `/api/users/${id}`;

  const editSchema = z.object({
    email: z.string().email(),
    first_name: z.string().min(1),
    last_name: z.string().min(1),
  });

  type EditSchemaType = z.infer<typeof editSchema>;

  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<EditSchemaType>({
    resolver: zodResolver(editSchema),
    defaultValues: {
        first_name: "",
        last_name: "",
        email: ""
    }
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await axios.get(BASE_URL+GET_USER_URL);
        reset(res.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    getUserData();
  }, [reset]);

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<EditSchemaType> = async (data) => {
    try {
      const res = await axios.put(BASE_URL + EDIT_URL, {
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
      });
      console.log(res.data);
      if (res.data.error) {
        setError("root", res.data.error);
      }
      navigate("/");
    } catch (err) {
      console.log("Hello2");
      if (err instanceof Error) {
        setError("root", err);
      }
    }
  };

  return (
    <div className=" h-screen w-screen bg-neutral-500 flex justify-center items-center">
      <div className=" bg-white h-[30rem] w-80 rounded-lg flex justify-center items-start">
        <div className="h-[90%] w-5/6 flex flex-col justify-evenly">
          <div className=" font-bold text-4xl self-center ">Update</div>
          <div className=" text-neutral-500 font-semibold text-center">
            Use the form below to edit your data
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" text-left text-sm font-bold ">First Name</div>
            <input
              {...register("first_name")}
              className=" border border-gray-400 w-full p-1 my-2 rounded-sm "
              type="text"
              placeholder=""
            />
            {errors.first_name && (
              <p className="text-red-500 pb-2 text-sm font-semibold">
                {errors.first_name.message}
              </p>
            )}

            <div className=" text-left text-sm font-bold ">Last Name</div>
            <input
              {...register("last_name")}
              className=" border border-gray-400 w-full p-1 my-2 rounded-sm "
              type="text"
              placeholder=""
            />
            {errors.last_name && (
              <p className="text-red-500 pb-2 text-sm font-semibold">
                {errors.last_name.message}
              </p>
            )}

            <div className=" text-left text-sm font-bold ">Email</div>
            <input
              {...register("email")}
              className=" border border-gray-400 w-full p-1 my-2 rounded-sm "
              type="text"
              placeholder="johndoe@example.com"
            />
            {errors.email && (
              <p className="text-red-500 pb-2 text-sm font-semibold">
                {errors.email.message}
              </p>
            )}
            <button
              type="submit"
              className="text-white bg-black hover:bg-gray-900 font-medium w-full rounded-md text-sm px-5 py-2.5 me-2 mb-2"
            >
              Update
            </button>
            {errors.root && (
              <p className="text-red-500 bg-white pb-2 font-semibold">
                {errors.root.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Edit;
