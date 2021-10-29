import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LogoRick from '../../assets/img/rickandmorty.png';

export const Nav: React.FC = () => {
    return(
        <motion.nav
            className="nav-bar"
            animate={{ x: 100 }} transition={{ duration: 2 }}>
            <motion.div
                style={{backgroundColor: "transparent"}}
                animate ={{ rotate: 360 }}
                transition={{ duration: 3 }}>
                <img style={{backgroundColor: 'transparent'}} src={LogoRick} alt="Logo Rick and Morty" />
            </motion.div>
            <div className="links">
                <Link to='/'>Home |</Link>
                <Link to='/rm'>RickAndMorty |</Link>
                <Link to='/form'>Form |</Link>
                <Link to='/todo'>ToDo</Link>
            </div>
        </motion.nav>
    )
}