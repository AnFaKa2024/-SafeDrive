import Rodape from "../../components/Rodape";
import Corpo from "./Corpo";
import Principal from "./Principal";

export default function Home(){
  return(
    <>

    {/*  esse principal = cabeçalho  principal*/}
      <Principal/> 
      <Corpo/>
      <br/>
      <br/>
      <Rodape/>
       
    </>
  )
}