export default function Hello(props) {
    //Elementos rederizáveis utiliza-se parênteses
    return (
      <div>
        <h1>Hello {props.name}</h1>
      </div>
    );
  }