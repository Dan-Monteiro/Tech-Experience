import Form from "../../components/Form";
import { useSelector } from 'react-redux';
import { IAllPersons, IPerson } from '../../store/modules/types';
import Footer from "../../components/Footer";

const FormView: React.FC = () => {

    const state = useSelector((state: IAllPersons) => state.persons); //Query All Persons

    return(
        <>  
            <h1 className="title">Form</h1>
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
            <Footer />
        </>
    )
}

export default FormView;