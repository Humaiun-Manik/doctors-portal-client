import React from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import gallery from "../../assets/images/gallery.png";
import Loading from "../Shared/Loading";

const AddDoctor = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imageStorageKey = "adac0b68c11c7d3ec0968f2e2162f670";

  const { data: services, isLoading } = useQuery("services", () =>
    fetch("https://doctors-portal-sxnn.onrender.com/treatment").then((res) => res.json())
  );

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            photo: img,
          };
          // send doctor to database
          fetch("https://doctors-portal-sxnn.onrender.com/doctor", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(doctor),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success("Doctor added successfully");
                reset();
              } else {
                toast.error("Failed to add doctor");
              }
            });
        }
      });
  };

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <section className="mx-5">
      <h1 className="text-2xl font-bold mt-11">Add a New Doctor</h1>
      <div className="w-full lg:pt-20 lg:pl-20 mb-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text text-sm font-semibold">Name</span>
            </label>
            <input
              type="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full max-w-md"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <label className="label">
              {errors.name?.type === "required" && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.name.message}
                </p>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label pt-0">
              <span className="label-text text-sm font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input input-bordered w-full max-w-md"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="label-text-alt text-red-500" role="alert">
                  {errors.email.message}
                </p>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label pt-0">
              <span className="label-text text-sm font-semibold">Specialty</span>
            </label>
            <select {...register("specialty")} className="select select-bordered w-full max-w-md">
              {services.map((service) => (
                <option key={service._id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control w-full max-w-md mt-7 mb-3 py-5 border-2 border-dashed border-gray-300 rounded">
            <div className="mx-auto">
              <input
                {...register("image", {
                  required: {
                    value: true,
                    message: "Image is required",
                  },
                })}
                type="file"
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-base file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100"
              />
            </div>
            <div className="shrink-0  mx-auto mt-2">
              <img className="h-16 w-16 object-cover" src={gallery} alt="Upload File" />
            </div>
          </div>
          <label className="label pt-0">
            {errors.image?.type === "required" && (
              <p className="label-text-alt text-red-500 pt-0" role="alert">
                {errors.image.message}
              </p>
            )}
          </label>
          <input className="btn w-full max-w-md text-xl capitalize mt-3" type="submit" value="Add" />
        </form>
      </div>
    </section>
  );
};

export default AddDoctor;
