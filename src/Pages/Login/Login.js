import React, { useEffect } from "react";
import auth from "../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useToken from "../../hooks/useToken";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const {
    register,
    watch,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user || googleUser);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  let signInError;

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  if (loading || googleLoading || sending) {
    return <Loading></Loading>;
  }

  if (error || googleError || resetError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message}</small>
      </p>
    );
  }

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data?.email, data?.password);
  };

  const resetPassword = async () => {
    let email = watch().email;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email", { icon: "🚀" });
      reset();
    } else {
      toast.error("Please Enter Your Email Address");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen overflow-hidden">
      <div className="card w-96 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-semibold">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
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
              <label className="label flex flex-col">
                {errors.password?.type === "required" && (
                  <p className="label-text-alt w-full text-red-500" role="alert">
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
          <p className="label-text text-center text-sm mt-2">
            Forgot Password ?{" "}
            <button onClick={resetPassword} className="text-secondary">
              Reset Password.
            </button>
          </p>
          <p className="text-sm text-center mt-2">
            New to Doctors Portal?
            <Link to="/signup" className="text-secondary  ml-2">
              Create new account
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

export default Login;
