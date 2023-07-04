"use client";

import { PrimaryButton } from "@/components/Button/button";
import { FormField } from "@/components/FormField";
import { Logo } from "@/components/Logo";
import { PasswordField } from "@/components/PasswordField";
import { useForm } from "react-hook-form";
import { passwordRule, emailRule } from "@/utils/validateRules";
import { axios } from "@/utils/axiosInstance";

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

  const onSubmit = async (data) => {
    try {
      // ToDo: add next behavior
      await axios.post("/login/api", { data }, { withCredentials: true });
    } catch (error) {
      setError("root.serverError", {
        type: error?.response?.status,
        message: error?.response?.data?.error || "uncorrect email or password",
      });
    }
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center px-6 lg:px-8">
      <div className="mx-auto w-full max-w-xs sm:max-w-sm">
        <div className="w-full text-center before:block before:absolute before:bg-slate-700 before:bg-opacity-40 before:-inset-1.5 before:rounded-full before:rounded-bl-none relative inline-block">
          <Logo />
        </div>
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 cursor-default">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 mx-auto w-full max-w-xs sm:max-w-sm sm:border border-neutral-200 border-opacity-40 shadow-neutral-200 sm:shadow-lg rounded-md p-4 sm:p-6 md:p-8 lg:p-10">
        {errors?.root?.serverError && (
          <div className="flex flex-row items-center py-2 px-3 mb-6 text-red-500 bg-red-100 border border-red-300 rounded-sm">
            {errors?.root?.serverError?.message}
          </div>
        )}
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
