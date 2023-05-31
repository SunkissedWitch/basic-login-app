"use client";

import { PrimaryButton } from "@/components/Button/button";
import { FormField } from "@/components/FormField";
import { Logo } from "@/components/Logo";
import { PasswordField } from "@/components/PasswordField";
import { useForm } from "react-hook-form";
import { passwordRule, emailRule } from "@/utils/validateRules";
import axios from "axios";

export default function Login() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    reValidateMode: "onChange",
  });
  console.log("errors", errors);

  const onSubmit = async (data) => {
    console.log("data", data);
    try {
      const response = await axios.post("http://localhost:3000/login/api", {
        data,
      });
      console.log("response", response);
    } catch (error) {
      console.error("onSubmit [error]:", error?.message);
      setError("root.serverError", {
        type: error?.response?.status,
        message: error?.response?.statusText,
      });
    }
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center px-6 lg:px-8">
      <div className="mx-auto w-full max-w-xs sm:max-w-sm">
        <div className="w-full text-center before:block before:absolute before:bg-slate-700 before:bg-opacity-80 before:-inset-0.5 relative inline-block">
          <Logo />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 cursor-default">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-xs sm:max-w-sm">
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <FormField
            label={"Email address"}
            id={"email"}
            type={"email"}
            autoComplete="email"
            register={register}
            required={{ value: true, message: "Please enter your email" }}
            rules={emailRule}
            error={errors?.email}
          />

          <PasswordField
            label={"Password"}
            id={"password"}
            type={"password"}
            autoComplete="current-password"
            forgotQuestion
            restorePasswordLink="#"
            register={register}
            required={{ value: true, message: "Please enter your password" }}
            rules={passwordRule}
            error={errors?.password}
          />
          <div className="pt-6">
            <PrimaryButton type="submit" title={"Sign in"} />
          </div>
        </form>
      </div>
    </div>
  );
}
