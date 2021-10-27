import Form from "../../components/Form";
import { useSelector } from 'react-redux';
import { IAllPersons, IPerson } from '../../store/modules/types';

const FormView: React.FC = () => {

    const state = useSelector((state: IAllPersons) => state.persons); //Query All Persons

    return(
        <div>
            <Form />
            <br />
            <hr />
            <br />
            { state.map(( person: IPerson, index ) => (
                <div key={index}>
                    <span>Nome: {person.name}</span>
                    <span>Email: {person.email}</span>
                </div>
            )) }
        </div>
    )
}

export default FormView;