import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { loginRequest } from "../../Services/index";

export const useLoginForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm<LoginFormData>();
  const handleLogin = useMemo(
    () =>
      handleSubmit(async (data) => {
        const res = await loginRequest(data);
        console.log(res);
        if (res) {
          const token = String(res.access_token) || "";
          const expiredAt = String(res.expired_at);
          localStorage.setItem("token", token);
          localStorage.setItem("expiredAt", JSON.stringify(expiredAt));

          return true;
        }
      }),
    [handleSubmit]
  );
  return { register, handleLogin, errors, control };
};

export interface LoginFormData {
  username: string;
  password: string;
}
