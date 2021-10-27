import React, { useState, useEffect } from 'react';
import { api_facts, api_photos } from '../../service/api';
import ClipLoader from "react-spinners/ClipLoader";

const Home: React.FC = () => {

    const [ currentFact, setCurrentFact ] = useState<string>('');
    const [ currentPhoto, setCurrentPhoto ] = useState<string>('');
    const [ isLoad, setIsLoad ] = useState<boolean>(false);
    const [ searchNewFacts, setSearchNewFacts ] = useState<boolean>(false);

    useEffect(() => {

        setIsLoad(false);

        Promise.all([api_photos.get(''), api_facts.get('')])
            .then(res => {
                console.log(res);
                const data_photo = res[0]
                const data_fact = res[1];
                console.log('photo', data_photo);
                console.log('fact', data_fact);
                setCurrentPhoto(data_photo.data.file);
                setCurrentFact(data_fact.data.data[0]);
            })
            .catch(err => {
                alert(err)
            })
            .finally(() => {
                setTimeout(() => {
                    setIsLoad(true);
                }, 1000)
            });

    }, [searchNewFacts]);

    return(
        <div className="container col center">
            <h1>Facts about Cats!</h1>
            <div className="container col center card">
                { isLoad ? <>
                    <img className="img" src={currentPhoto} onLoad={() => setIsLoad(true)}/>
                    <p>{currentFact}</p>
                </>: <div className="container col center">
                        <ClipLoader loading size={60} />
                        <p>loading...</p>
                    </div>}
                <button disabled={!isLoad} onClick={() => setSearchNewFacts(!searchNewFacts)}>Discover</button>
            </div>
        </div>
    )
}

export default Home;