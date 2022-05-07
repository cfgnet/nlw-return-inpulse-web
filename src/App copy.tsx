interface ButtonProps {
  text?: string;
  controle?: number;
}
function Button(props: ButtonProps){
  /*****Forma tradicional usando classes em CSS a parte ******************/
//  return <button className="button">{props.text ?? 'Default'} - {props.controle ?? 0*3}</button>
  /*****************************************************************/
  /************Forma mais moderna usando Tailwildcss***** */
  return <button className="bg-violet-500 px-4 h-10 rounded text-violet-100 hover:bg-violet-700 transition-colors">{props.text ?? 'Default'} - {props.controle ?? 0*3}</button>
}

function App() {
  return (
  <div className="flex gap-1">
  <h1>Hello World SDCNet.OnLine</h1>
  <Button text="Enviar" controle="1"/>
  <Button text="Ok" controle="2"/>
  <Button text={"Receber"} controle={3} />
  <Button />
  </div>
  )
}

export default App

