import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='flex h-3/4 w-5/6 container mt-5 mx-auto bg-zinc-600 rounded-xl'>
            <div className='flex flex-col items-center mx-auto'>
                <h1 className='text-8xl font-extrabold my-5'>Contact</h1>
                <div>
                    <p className='text-4xl mb-5'>I am available for hire and excited for opportunities</p>
                    <div className='bg-gray-800 p-4'>
                        <div className='flex items-center'>
                            <h1 className='text-5xl font-bold text-green-400 mr-5'>
                                Email:
                            </h1>
                            <div className='flex text-3xl hover:text-blue-600'>
                                <MdEmail className='mr-2'/>
                                <Link to="mailto:">holt.christopher1@gmail.com</Link>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-5xl font-bold text-green-400 mr-5'>
                                LinkedIn: 
                            </h1>
                            <div className='flex text-3xl items-center my-3 hover:text-blue-600'>
                                <FaLinkedin className='mr-2'/>
                                <Link to="https://www.linkedin.com/in/cjholt/">CJ Holt</Link>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-5xl font-bold text-green-400 mr-5'>
                                Github:
                            </h1>
                            <div className='flex text-3xl items-center my-3 hover:text-blue-600'>
                                <FaGithub className='mr-2'/>
                                <Link to="https://github.com/Bissmark">Bissmark</Link>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <h1 className='text-5xl font-bold text-green-400 mr-5'>
                                Youtube:
                            </h1>
                            <div className='flex text-3xl items-center my-3 hover:text-blue-600'>
                                <FaYoutube className='mr-2'/>
                                <Link to="https://www.youtube.com/channel/UCkiCA2AtCdRxRd_G-svQ2PA">CJ Holt</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Contact;