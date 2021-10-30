import React, { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

import animes from '@/services';

import { ISearch, IAnimeResults } from '@/types';


const Home: React.FC = () => {
  
  const [anime, setAnime] = useState<IAnimeResults>({} as IAnimeResults);
  const [isLoad, setIsLoad] = useState<boolean>(false);

  const { 
    register, 
    formState: { errors }, 
    handleSubmit, 
    getValues 
  } = useForm<ISearch>();

  const onSubmit: SubmitHandler<ISearch> = (data) => {
    setIsLoad(true)
    const { find } = data;
    animes.get(`search/anime?q=${find}`)
    .then( response => {
      setTimeout(() => {
        setAnime(response.data)
      }, 1000);
    })
    .catch( e => console.log(e))
    .finally( () => { setIsLoad(false) })
  };

  console.log('anime ', anime)

  return (
    <div>
      <h1>Escolha o seu anime</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="nome do anime"
          {...register('find', { required: true })}
        />
        <span>{errors.find && 'informe o anime!'}</span>
        <input
          type="submit"
          value="buscar"
        />
      </form>
      <hr />
      { isLoad ? (
        <div>
          <span>Estamos pesquisando... aguarde instantes.</span>
        </div>
      ) : (
        <>
        { anime?.results?.length <= 0 ? (
          <h3>Por enquando, você ainda não pesquisou nada...</h3>
        ) : (
          <>
            { anime?.results?.map( item => (
              <div key={item.mal_id}>
                <span>{item.title}</span>
                <img src={item.image_url} alt={item.title} />
                <p>{item.synopsis}</p>
                <p><b>Nota: </b> {item.score}</p>
              </div>
            ) )}
          </>
        )}
        </>
      )}
    </div>
  );
}

export default Home;