import React from "react";
import type { LoginFormTypes } from "../types/LoginForm.types";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../schema/LoginForm.schema";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormTypes>({ resolver: yupResolver(LoginFormSchema) });
  const onSubmit: SubmitHandler<LoginFormTypes> = (data) => {
    console.log("Hook form data:", data);
    reset();
  };
  const onClickHanlder = () => {
    navigation("/sign-up");
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[500px] h-[320px] gap-5 shadow-2xl"
      >
        <h1 className="text-black font-bold text-xl">Sign In</h1>
        <div className="w-[500px]">
          <input
            type="text"
            {...register("email")}
            id=""
            placeholder="Email"
            className="w-[350px]"
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            id="password"
            placeholder="Password"
            className="w-[350px]"
          />
          <p className="text-red-600">{errors.password?.message}</p>
        </div>
        <div className="flex flex-row gap-6 justify-center w-[500px]">
          <button type="submit" className="bg-blue-700 rounded-2xl w-[200px]">
            Log In
          </button>
          <button onClick={onClickHanlder} className="w-[200px]">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
