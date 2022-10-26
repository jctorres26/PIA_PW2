import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/Form';
import { Link } from "react-router-dom"; 
 
const Perfil = () => {
    return(
        <div>
            <div className="padre">
        <div className="hijo">
     
  <Button variant="warning btn-lg" type="submit"><Link to="/perfil">
    Respondidas</Link>
  </Button>
 
  <Button variant="info btn-lg" type="submit"><Link to="/norespondidas">
    No Respondidas</Link>
  </Button>
  <Label>Preguntas Respondidas</Label>
    <Form className="Form-log">
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">Que necesito para centrar un div?</textarea>
    <p></p>
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">Solo dile que se centre :3</textarea>
 </Form>
 <p></p>
 <Form className="Form-log">
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">Hola?</textarea>
    <p></p>
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">hola uwu</textarea>
 </Form>

 


 
 
 
 </div></div>
        </div>
    )
}
export default Perfil