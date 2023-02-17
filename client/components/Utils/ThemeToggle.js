import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


const ThemeToggle = () => {
    const { systemTheme, theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const renderThemeChanger = () => {
        if (!mounted) return null;

        const currentTheme = theme == 'system' ? systemTheme : theme;

        if (currentTheme == 'dark') {
            return (
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={() => setTheme('light')} />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600"></div>
                </label>
            )
        }
        else {
            return (
                <label className="relative inline-flex items-center mr-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer" onClick={() => setTheme('dark')} defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                </label>
            )
        }
    }
    return (
        <div>
            {renderThemeChanger()}
        </div>
    );
};

export default ThemeToggle;