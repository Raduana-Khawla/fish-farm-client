import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const [signup, setSignUp] = useState({
    isPasswordShow: false,
    password: "",
    error: "",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const result = await createUser(data.email, data.password);
      const loggedUser = result.user;
      console.log(loggedUser);

      await updateUserProfile(data.name, data.photoURL);

      const userInfo = {
        name: data.name,
        email: data.email,
      };

      const res = await axiosPublic.post("/users", userInfo);
      if (res.data.insertedId) {
        console.log("user added to the database");
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User created successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (error) {
      // console.error("Error creating user:", error.message);
      // Handle error here
      setSignUp((prev) => ({ ...prev, error: error.message }));
      if (error.code === "auth/email-already-in-use") {
        // Email is already in use
        // Show appropriate error message to the user
      } else {
        // Other errors
        // Show a generic error message or handle them accordingly
      }
    }
  };

  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl text-bold bg-indigo-600">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <div className=" flex items-center relative">
                  <input
                    onChange={(e) =>
                      setSignUp((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    type={signup.isPasswordShow ? "text" : "password"}
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    // value={signup.password}
                    placeholder="password"
                    className="input input-bordered w-full"
                  />

                  <div className="absolute right-4">
                    {signup.isPasswordShow ? (
                      <AiFillEye
                        onClick={() =>
                          setSignUp((prev) => ({
                            ...prev,
                            isPasswordShow: false,
                          }))
                        }
                        className=" text-white "
                      />
                    ) : (
                      <AiFillEyeInvisible
                        onClick={() =>
                          setSignUp((prev) => ({
                            ...prev,
                            isPasswordShow: true,
                          }))
                        }
                        className=" text-white "
                      />
                    )}
                  </div>
                </div>
                {signup.error && <p className="text-red-300">{signup.error}</p>}
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-white"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary font-bold"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="px-6">
              <small className="text-white">
                Already have an account <Link to="/login">Login</Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
