import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { SignUpFormTypes } from "../types/SignUpForm.types";
import { SignUpFormSchema } from "../schema/SignUpForm.schema";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpFormTypes>({ resolver: yupResolver(SignUpFormSchema) });
  const onSubmit: SubmitHandler<SignUpFormTypes> = (data) => {
    console.log("Hook form data:", data);
    reset();
  };
  const onClickHanlder = () => {
    navigation("/");
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-[500px] h-[400px] gap-5 shadow-2xl"
      >
        <h1 className="text-black font-bold text-xl">Sign Up</h1>
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
        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            id="password"
            placeholder="Confirm Password"
            className="w-[350px]"
          />
          <p className="text-red-600">{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("phoneNumber")}
            id="password"
            placeholder="Phonenumber"
            className="w-[350px]"
          />
          <p className="text-red-600">{errors.phoneNumber?.message}</p>
        </div>
        <div>
          <input
            type="text"
            {...register("name")}
            id="password"
            placeholder="Name"
            className="w-[350px]"
          />
          <p className="text-red-600">{errors.name?.message}</p>
        </div>
        <div className="flex flex-row gap-6 justify-center w-[500px]">
          <button type="submit" className="bg-blue-700 rounded-2xl w-[200px]">
            Submit
          </button>
          <button onClick={onClickHanlder} className="w-[200px]">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
