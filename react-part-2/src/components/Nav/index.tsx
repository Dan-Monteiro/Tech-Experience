import Reatc from 'react';
import { Link } from 'react-router-dom';

export const Nav: React.FC = () => {
    return(
        <div>
            <Link to='/'>Home</Link>
            <Link to='/rm'>RickAndMorty</Link>
            <Link to='/form'>Form</Link>
            <Link to='/todo'>ToDo</Link>
        </div>
    )
}