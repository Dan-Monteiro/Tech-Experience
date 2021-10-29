import React, 
    { useState,
      useEffect } from "react";
import api from '../../service/api';
import Lottie, { useLottie } from 'lottie-react';
//import RickDanceAnimation from '../../assets/animation/morty-dance-loader.json';
import RickDance from "./Animated";

interface IResults {
    id: number;
    image: string;
    name: string;
    url: string;
}

interface ICount {
    count: number;
    pages: number;
}

interface IResponseData {
    info: ICount;
    results: IResults[];
}
 
const RickAndMorty: React.FC = () => {

    const [ data, setData ] = useState<IResults[]>([]); //literals <> === literals
    const [ pages, setPages ] = useState(1);
    const [ info, setInfo ] = useState<ICount>({} as ICount);
    const [ isLoad, setIsLoad ] = useState(true);
 
    const handleIncrement = (page: number) => {
        setPages(pages + page);
        window.scrollTo(0, 0);
    }

    useEffect(() => {

        setIsLoad(true);

        api.get<IResponseData>(`?page=${pages}`)
        .then(
            response => {
                console.log(response.data)
                setInfo(response.data?.info)
                setData(response.data?.results)
            }
        )
        .catch(err => {
            alert(err.message)
        })
        .finally( () =>
        setTimeout(() => {
            setIsLoad(false)
        }, 2000)
            
        )
    }, [pages]);

    if(isLoad){
        return(
            <div className="col rick-loader">
                <RickDance />
                {/*<Lottie
                    animationData={RickDanceAnimation}
                style={{width: 300, height: 280}} />*/}
                <p className="title">arrumando a casa...</p>
            </div>
        )
    }

    return ( 
        <div>
            <h1 className="title">Meet the mates from Rick and Morty</h1>
            <div style={{flex:1, flexDirection: 'row', flexWrap: 'wrap', display: 'flex', float: 'left'}}>
                { data.map( item => (
                    <div key={item.id} style={{display: 'flex', flexDirection: 'column'}} >
                        <img style={{ borderRadius: 20 }} src={ item.image } alt={ item.name } />
                        <p style={{fontWeight: 'bold'}}>{ item.name }</p>
                        <a href={item.url} target="_blank">clique para ver mais</a>
                    </div>
                )) }
            </div>
            <div>
                <button 
                    onClick={ () => handleIncrement(-1)}
                    disabled={pages <= 1}
                >
                    Previous
                </button>
                <button  
                    onClick={ () => handleIncrement(1)}
                    disabled={ pages >= info.pages }
                >
                    Next
                </button>
            </div>
        </div>
    );
}
 
export default RickAndMorty;