import PokemonImage from '../images/PokemonParty.png';
import RubyImage from '../images/Ruby.png';
import PostgresqlImage from '../images/Postgresql.png';
import UnityImage from '../images/Unity.png';
import CSharpImage from '../images/CSharp.webp';
import GeoWhereImage from '../images/GeoWhere.png';
import SupabaseImage from '../images/Supabase.jpeg';
import CryptoImage from '../images/Crypto-Image.png';
import HTMLImage from '../images/HTML.png';
import CSSImage from '../images/CSS.png';
import JSImage from '../images/Javascript.png';
import ReactImage from '../images/React.png';
import FirebaseImage from '../images/Firebase.png';
import MUIImage from '../images/MaterialUI.png';
import Chronosphere from '../images/Chronosphere.png';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(false);

    const projects = [
        {
            title: 'Ceege Crypto',
            description: ['A crypto pricing webiste watching over the top 100 coins in realtime', 'Graphs showing the rise and fall of the coins over the last 24 hours', 'Add your favourite coins to your profile and play a mini investment game to see how much you would gain over a period of 24 hours'],
            image: CryptoImage,
            technologies: [HTMLImage, CSSImage, JSImage, ReactImage, FirebaseImage, MUIImage],
            demoLink: 'https://ceegecrypto.firebaseapp.com/'
        },
        {
            title: 'GeoWhere',
            description: ['A Google Maps streetview location guessing game', '5 rounds of placing a marker where you think you are in the world and then getting points based on how close you were to the correct answer'],
            image: GeoWhereImage,
            technologies: [HTMLImage, CSSImage, JSImage, ReactImage, SupabaseImage],
            demoLink: 'https://geowhere.netlify.app/'
        },
        {
            title: 'Pokemon Party Planner',
            description: ['A Pokemon pokedex comprising of Generation 1 pokemon and moves', 'Allows a user to build a party of 6 pokemon selecting from the given pokedex'],
            image: PokemonImage,
            technologies: [HTMLImage, CSSImage, RubyImage, PostgresqlImage],
            demoLink: ''
        },
        {
            title: 'Chronosphere',
            description: ['A ball platformer game where the aim is to traverse through an obstacle course to make your way to the end', 'Dodge spikes, teleport around the field, jump onto platforms and reach the time gate without falling off the course', 'Built in 48 hours during a weekend GameJam with myself and 2 friends'],
            image: Chronosphere,
            technologies: [UnityImage, CSharpImage],
            demoLink: 'https://bissmark.github.io/chronosphere-webgl/'
        },
        {
            title: 'To-Do List',
            description: ['Create draggable categories for your To-Do Lists and then add Tasks to those categories', 'Have a priority / time cross where you can visually see what categories of tasks are more pressing to do than others'],
            image: '',
            technologies: [HTMLImage, CSSImage, ReactImage, NodeImage, MongoDBImage],
            demoLink: 'https://school-notes-backend.onrender.com/'
        },
        {
            title: 'Bananagrams',
            description: ['Fast and frantic word game where you are trying to create words using tiles (Similar to Scrabble)', 'You can peel: Whenever a player uses the last of their tiles, everyone gets another tile, dump: where you can throw away 1 tile for 3 more', 'And when you end the game and think that all your words are correct you can call Bananas which will get a Dictionary API to check if your words work'],
            image: '',
            technologies: [HTMLImage, CSSImage, JSImage],
            demoLink: 'https://bissmark.github.io/BananaGramsSinglePlayer/'
        },
        {
            title: 'Escape Room',
            description: ['Play intricate escape rooms using user created puzzles', 'Implement different visual locks and have each puzzle link to the next to create modular escape rooms where each room can be different than the last'],
            image: '',
            technologies: [HTMLImage, CSSImage, JSImage, PythonImage, DjangoImage, TailwindImage, PostgresqlImage],
            demoLink: 'https://escaperoom-gaxe.onrender.com/'
        },
        {
            title: 'Ceege Books',
            description: ['A book checking website to see what books that you own you have read or notRead', 'Users can also see other reviews and add their own'],
            image: '',
            technologies: [HTMLImage, CSSImage, JSImage, MongoDBImage, NodeImage, ExpressImage, EJSImage, TailwindImage],
            demoLink: 'https://ceegebooks.firebaseapp.com/'
        }
    ];

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }

    const { title, description, image, technologies, demoLink } = projects[currentIndex];

    return loading ? (
        <div className="flex items-center justify-center w-56 h-56 rounded-lg mx-auto">
            <div role="status">
                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        
    ) : (
        <div className='flex w-full h-5/6 container mx-auto'>
            <button onClick={prevProject} className='text-4xl'>&lt;</button>
                <div className='flex flex-col justify-center items-center bg-zinc-600 rounded-xl w-5/6 mx-auto'>
                    <h1 className='text-5xl mb-5 mt-5'>{title}</h1>
                    {description.map((desc, index) => (
                        <li key={index}>{desc}</li>
                    ))}
                    <img className='w-1/3 mb-5 mt-5' src={image} alt={title} />
                    <div className="flex flex-row h-8 justify-center mb-5">
                        {technologies.map((tech, index) => (
                            <img key={index} src={tech} alt="" />
                        ))}
                    </div>
                    <button className='bg-blue-600 rounded-sm px-3 py-1 mb-5'>
                        <Link to={demoLink} className='text-white'>Demo</Link>
                    </button>
                </div>
            <button onClick={nextProject} className='text-4xl'>&gt;</button>
        </div>
    );
}

export default Projects;