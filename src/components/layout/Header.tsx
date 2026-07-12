import { useEffect, useState } from "react";
import { getSiteInfo, type SiteInfo } from "../../services/site";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Sun, Moon } from "lucide-react";

function Header() {
  const [siteInfo, setSiteInfo] = useState<SiteInfo | null>(null);
  const { theme, setTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    async function loadSiteInfo() {
      try {
        const data = await getSiteInfo();
        setSiteInfo(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    loadSiteInfo();
  }, []);
  console.log(siteInfo);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 dark:border-gray-700 dark:bg-gray-800">
      {loading ? (
        <div className="text-gray-500 dark:text-gray-400">
          در حال بارگذاری...
        </div>
      ) : (
        <div className="flex items-center gap-4 text-xl">
          <img src={siteInfo?.logo} alt="" />
          <p>{siteInfo?.siteName}</p>
        </div>
      )}
      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 
                   text-gray-700 border-gray-300 hover:bg-gray-100 
                   dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        {theme === "light" ? (
          <>
            <Moon className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium">تیره</span>
          </>
        ) : (
          <>
            <Sun className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">روشن</span>
          </>
        )}
      </button>
      <button
        className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all duration-300 
                   text-gray-700 border-gray-300 hover:bg-gray-100 
                   dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
      >
        ورود / ثبت
      </button>
    </header>
  );
}

export default Header;
