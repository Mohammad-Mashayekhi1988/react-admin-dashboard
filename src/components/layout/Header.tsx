import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    console.log("Effect Run");
  });
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-700 dark:bg-gray-800">
      <h1 className="text-xl font-bold">لوگو</h1>
      <button onClick={toggleTheme}>تم</button>
      <div>پروفایل</div>
    </header>
  );
}

export default Header;
