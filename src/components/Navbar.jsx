import { Link } from "react-router-dom";
import { BiSolidContact } from "react-icons/bi";

const Navbar = () => {
    const cvUrl = "https://drive.google.com/file/d/1bIbdws2teR3J3Irs3hAcUjwbQxL8zS8m/view?usp=sharing"

    return (
        <header className="w-full flex items-center justify-between z-50 container mx-auto" >
            <Link className="text-2xl font-semibold mt-10" href="#">CJ.</Link>  
            <nav className="font-medium p-4 md:p-0 mt-10">
                <Link to="/" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-400 hover:border-gray-300 dark:hover:text-gray-300" >Home</Link>
                <Link to="/about" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-400 hover:border-gray-300 dark:hover:text-gray-300" >About</Link>
                <Link to="/projects" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-400 hover:border-gray-300 dark:hover:text-gray-300" >Projects</Link>
                <a href={cvUrl} target="_blank" rel="noopener noreferrer" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-400 hover:border-gray-300 dark:hover:text-gray-300">CV</a>
                <Link to="/contact" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-green-400 hover:border-gray-300 dark:hover:text-gray-300" >Contact</Link> 
            </nav>  
        </header>
    );
}

export default Navbar;