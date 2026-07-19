import TextField from "../ui/TextField";
import { X } from "lucide-react";
interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
function LoginModal({ isOpen, onClose }: LoginModalProps) {
  if (!isOpen) return null;

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
        />

        <TextField
          label="رمز عبور"
          type="password"
          placeholder="********"
          value={password}
          onChange={setPassword}
        />

        <button className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700">
          ورود
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
