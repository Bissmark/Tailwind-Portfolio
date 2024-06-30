import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <p>I am available for hire and excited for opportunities</p>

            <h1>Email:<Link to="mailto:">holt.christopher1@gmail.com</Link></h1>
            <h1>LinkedIn: <Link to="https://www.linkedin.com/in/cjholt/">CJ Holt</Link></h1>
            <h1>Github:<Link to="https://github.com/Bissmark">Bissmark</Link></h1>
            <h1>Youtube:<Link to="https://www.youtube.com/channel/UCkiCA2AtCdRxRd_G-svQ2PA">CJ Holt</Link></h1>
            
        </div>
    );
}

export default Contact;