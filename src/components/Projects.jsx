import CryptoImage from '../images/Crypto-Image.png'
import Chronosphere from '../images/Chronosphere.png'
import HTMLImage from '../images/html.png';
import CSSImage from '../images/css.png';
import JSImage from '../images/Javascript.png';
import ReactImage from '../images/React.png';
import FirebaseImage from '../images/Firebase.png';
import MUIImage from '../images/MaterialUI.png';
import SupabaseImage from '../images/Supabase.jpeg';
import GeoWhereImage from '../images/GeoWhere.png';
import PokemonImage from '../images/PokemonParty.png';
import RubyImage from '../images/Ruby.png';
import PostgresqlImage from '../images/Postgresql.png';
import UnityImage from '../images/Unity.png';
import CSharpImage from '../images/CSharp.webp';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div id="default-carousel" data-carousel="static" className="relative w-full h-5/6 mt-20 container mx-auto">
            <div className="relative overflow-hidden rounded-xl h-5/6 bg-zinc-600">
                <div className="flex flex-col justify-center h-full items-center duration-700 ease-in-out" data-carousel-item>
                    <img className=' w-1/3 mb-5' src={CryptoImage} alt="" />
                    <h1 className="text-5xl mb-5">Ceege Crypto</h1>
                    <ul className='mb-5'>
                        <li className='list-disc'>A crypto pricing webiste watching over the top 100 coins in realtime</li>
                        <li className='list-disc'>Graphs showing the rise and fall of the coins over the last 24 hours</li>
                        <li className='list-disc'>Add your favourite coins to your profile and play a mini investment game to see how much you would gain over a period of 24 hours</li>
                    </ul>
                    <div className='flex h-8 justify-center mb-5'>
                        <img src={HTMLImage} alt="" />
                        <img src={CSSImage} alt="" />
                        <img src={JSImage} alt="" />
                        <img src={ReactImage} alt="" />
                        <img src={FirebaseImage} alt="" />
                        <img src={MUIImage} alt="" />    
                    </div>
                    
                    <button className='bg-blue-600 rounded-sm px-3 py-1'>
                        <Link to='https://ceegecrypto.firebaseapp.com/' className='text-white'>Demo</Link>
                    </button>
                </div>
                <div className="flex flex-col justify-center h-full items-center duration-700 ease-in-out" data-carousel-item>
                    <img className='w-1/4 mb-5' src={GeoWhereImage} alt="" />
                    <h1 className="text-5xl mb-5">GeoWhere</h1>
                    <ul className='mb-5'>
                        <li className='list-disc'>A Google Maps streetview location guessing game</li>
                        <li className='list-disc'>5 rounds of placing a marker where you think you are in the world and then getting points based on how close you were to the correct answer</li>
                    </ul>
                    <div className='flex h-8 justify-center mb-5'>
                        <img src={HTMLImage} alt="" />
                        <img src={CSSImage} alt="" />
                        <img src={JSImage} alt="" />
                        <img src={ReactImage} alt="" />
                        <img src={SupabaseImage} alt="" />
                    </div>
                    
                    <button className='bg-blue-600 rounded-sm px-3 py-1'>
                        <Link to='https://geowhere.netlify.app/' className='text-white'>Demo</Link>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center duration-700 ease-in-out" data-carousel-item>
                <img className='w-1/3 mb-5' src={PokemonImage} alt="" />
                    <h1 className="text-5xl">Pokemon Party Planner</h1>
                    <ul className='mb-5'>
                        <li className='list-disc'>A Pokemon pokedex comprising of Generation 1 pokemon and moves</li>
                        <li className='list-disc'>Allows a user to build a party of 6 pokemon selecting from the given pokedex</li>
                    </ul>
                    <div className='flex h-8 justify-center mb-5'>
                        <img src={HTMLImage} alt="" />
                        <img src={CSSImage} alt="" />
                        <img src={RubyImage} alt="" />
                        <img src={PostgresqlImage} alt="" />
                    </div>
                    
                    <button className='bg-blue-600 rounded-sm px-3 py-1'>
                        <Link to='' className='text-white'>Demo</Link>
                    </button>
                </div>
                <div className="flex flex-col justify-center items-center h-full duration-700 ease-in-out" data-carousel-item>
                <img className='w-1/4 mb-5' src={Chronosphere} alt="" />
                    <h1 className="text-5xl mb-5">Chronosphere</h1>
                    <ul className='mb-5'>
                        <li className='list-disc'>A ball platformer game where the aim is to traverse through an obstacle course to make your way to the end</li>
                        <li className='list-disc'>Dodge spikes, teleport around the field, jump onto platforms and reach the time gate without falling off the course</li>
                        <li className='list-disc'>Built in 48 hours during a weekend GameJam with myself and 2 friends</li>
                    </ul>
                    <div className='flex h-8 justify-center mb-5'>
                        <img src={UnityImage} alt="" />
                        <img src={CSharpImage} alt="" />
                    </div>
                    
                    <button className='bg-blue-600 rounded-sm px-3 py-1'>
                        <Link to='https://bissmark.github.io/chronosphere-webgl/' className='text-white'>Demo</Link>
                    </button>
                </div>
            </div>
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-5/6 px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-5/6 px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
}

export default Projects;