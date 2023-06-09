import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full flex items-center justify-between z-50 container mx-auto" >
            <Link className="text-2xl font-semibold mt-10" href="#">CJ.</Link>  
            <nav className="font-medium p-4 md:p-0 mt-10">
                <Link to="/" className="text-lg font-medium ml-8 hover:text-blue-600" >Home</Link>
                <Link to="/about" className="text-lg font-medium ml-8 hover:text-blue-600" >About</Link>
                <Link to="/projects" className="text-lg font-medium ml-8 hover:text-blue-600" >Projects</Link>
                <Link to="/skills" className="text-lg font-medium ml-8 hover:text-blue-600" >Skills</Link>
                <Link to="/contact" className="text-lg font-medium ml-8 hover:text-blue-600" >Contact</Link>
            </nav>  
        </header>
    );
}

export default Navbar;