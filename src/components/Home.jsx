import { Link } from "react-router-dom";

const Home = () => {
    return (
        <section className="h-5/6 flex items-center container mx-auto">
            <div>
                <h1 className="text-6xl font-bold mb-5">Hi, I'm CJ Holt</h1>
                <h3 className="text-green-400 text-3xl font-bold mb-3 animate-pulse">Full-stack Developer</h3>
                <p className="w-4/6 mb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, tempore nulla nesciunt dignissimos mollitia minus explicabo asperiores atque nihil eos excepturi quod, perspiciatis vero hic debitis laboriosam deleniti animi velit.</p>

                <div className="mb-5">
                    <Link to='/contact' className="text-gray-900 py-2 px-9 text-2xl rounded-lg bg-green-400 inline-flex hover:text-white" >Let's Talk</Link>  
                </div>
                
                <div className="mt-10">
                    <Link className="inline-flex w-16 h-16 text-4xl border-4 border-green-400 rounded-full hover:text-blue-600 mr-5 justify-center items-center hover:animate-spin" to="https://www.linkedin.com/in/cjholt/"><i className='bx bxl-linkedin' ></i></Link>
                    <Link className="inline-flex w-16 h-16  text-4xl border-4 border-green-400 rounded-full hover:text-blue-600 mr-5 justify-center items-center hover:animate-spin" to="https://github.com/Bissmark"><i className='bx bxl-github' ></i></Link>
                    <Link className="inline-flex w-16 h-16  text-4xl border-4 border-green-400 rounded-full hover:text-blue-600 justify-center items-center hover:animate-spin" to="https://www.youtube.com/channel/UCkiCA2AtCdRxRd_G-svQ2PA"><i className='bx bxl-youtube' ></i></Link>  
                </div>
            </div>  
        </section>
    );
}

export default Home;