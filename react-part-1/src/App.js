import { useState, useEffect } from "react";
import Content from "./Content";
import Hello from "./Hello";

import {jokeURL} from './service/api';

import { 
  Button, 
  Card, 
  CardBody, 
  CardText, 
  CardTitle, 
  Container, 
  Spinner } from "reactstrap";

export default function App() {

  const [ name, setName ] = useState('');
  const [ joke, setJoke ] = useState({});
  const [ isLoad, setIsLoad ] = useState(false);
  const [ newJoke, setNewJoke ] = useState(false);

  const [ buttonJokeClicked, setButtonJokeCliked ] = useState(false)
  const [ buttonNameClicked, setButtonNameClicked] = useState(false)

  const buttonJokeTitle = 'Tell a new Joke';

  const handleSetName = (nameFunction) => {
    if(name !== ''){
      setName('');
    }else {
      setName(nameFunction);
    }
    setButtonNameClicked(!buttonNameClicked)
  }

  useEffect( () => {
    setIsLoad(true)
    setButtonJokeCliked(true)
    setTimeout(() => {
      jokeURL.get('random').then(
        response => {
          setJoke(response.data)
          setIsLoad(false)
          setButtonJokeCliked(false)
        }
      )
    }, 1000)
  }, [newJoke]);

  //Elementos rederizáveis utiliza-se parênteses
  return (
    <div style={{display:'flex', flexDirection: 'column', padding: 50}}>
      <div>
        <Hello name={name}/>
        <hr/>
        <Button color="danger" onClick={() => handleSetName('Méliuz')}>{buttonNameClicked ? 'Hide Name' : 'Reveal Name'}</Button>
        <div style={{marginTop: 20}}>
          <Content />
        </div>
        <hr/>
        <Button disabled={buttonJokeClicked} color="danger" onClick={() => setNewJoke(!newJoke)}> {buttonJokeTitle} </Button>
      </div>
      { isLoad && (
        <div id="loader" style={{flex:1, height:200, alignItems: 'center', justifyContent: 'center', display: 'flex', margin: 50}}>
            <Spinner color="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <p style={{margin:0, marginLeft: 5}}>Carregando...</p>
        </div>
      ) }

      {
        !isLoad &&( 
        <Container style={{marginTop: 20}}>
          <Card>
            <img style={{alignSelf: 'center', margin: 30}} src={joke?.icon_url} alt={joke?.value}/>
            <CardBody>
              <CardTitle tag="h5">The Joke</CardTitle>
              <CardText><h1>{joke?.value}</h1></CardText>
            </CardBody>
          </Card>
        </Container>)
      }
    </div>
  );
}