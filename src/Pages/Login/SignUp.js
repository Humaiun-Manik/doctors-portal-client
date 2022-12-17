import React from "react";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let signInError;

  if (loading || updating || googleLoading) {
    return <Loading></Loading>;
  }

  if (error || updateError || googleError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  if (user || googleUser) {
    console.log(googleUser || user);
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data?.email, data?.password);
    await updateProfile({ displayName: data?.name });
    reset();
    navigate("/appointment");
  };

  return (
    <div className="flex justify-center items-center h-screen  overflow-hidden">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text text-sm">Name</span>
              </label>
              <input
                type="name"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
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
            <div className="form-control w-full max-w-xs">
              <label className="label pt-0">
                <span className="label-text text-sm">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
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
            <div className="form-control w-full max-w-xs">
              <label className="label pt-0">
                <span className="label-text text-sm">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or logger",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <p className="label-text-alt text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="label-text-alt text-red-500" role="alert">
                    {errors.password.message}
                  </p>
                )}
              </label>
            </div>
            {signInError}
            <input className="btn w-full text-base mt-3" type="submit" value="Login" />
          </form>
          <p className="text-sm text-center mt-2">
            Already have an account?
            <Link to="/login" className="text-secondary  ml-2">
              Please Login
            </Link>
          </p>
          <div className="divider">OR</div>
          <div className="card-actions justify-center">
            <button
              onClick={() => {
                signInWithGoogle();
              }}
              className="btn btn-outline w-full text-base"
            >
              Continue with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
