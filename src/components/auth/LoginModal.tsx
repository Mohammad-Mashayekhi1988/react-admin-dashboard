import { useState } from "react";
import TextField from "../ui/TextField";
import { X } from "lucide-react";
import { login } from "../../services/auth";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  if (!isOpen) return null;

  async function handeleLogin() {
    let hasError = false;
    setEmailError("");
    setPasswordError("");
    if (email.trim() === "") {
      setEmailError("ایمیل الزامی است");
      hasError = true;
    } else if (!email.includes("@") || !email.includes(".com")) {
      setEmailError("فرمت ایمیل صحیح نیست");
      hasError = true;
    }

    if (password.trim() === "") {
      setPasswordError("رمز عبور الزامی است");
      hasError = true;
    } else if (password.length < 8) {
      setPasswordError("رمز عبور باید حداقل 8 کاراکتر باشد");
      hasError = true;
    }

    if (hasError) {
      return;
    }
    try {
      const result = await login({
        email,
        password,
      });
      console.log(result);
      setEmail("");
      setPassword("");
      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70"
      onClick={onClose}
    >
      <div
        className="relative  w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 rounded-md p-1 text-gray-500 transition hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <X size={20} />
        </button>
        <h2 className="mb-6 text-center text-2xl font-bold dark:text-white">
          ورود
        </h2>

        <TextField
          label="ایمیل"
          type="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={setEmail}
          error={emailError}
        />

        <TextField
          label="رمز عبور"
          type="password"
          placeholder="********"
          value={password}
          onChange={setPassword}
          error={passwordError}
        />

        <button
          onClick={handeleLogin}
          className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          ورود
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
