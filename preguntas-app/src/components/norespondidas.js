import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/Form';
import { Link } from "react-router-dom"; 

 
const Norespondidas = () => {
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
  <Label>Preguntas No Respondidas</Label>
 
 <Form className="Form-log">
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">lugares bonitos para ir en mty</textarea>
    <p></p>
    <textarea className="textarea" name="textarea" rows="1" cols="7" ></textarea>
    <div >
  <Button variant="warning btn-sm" type="submit">
    Responder
  </Button></div>
 </Form>

 


 
 
 
 </div></div>
        </div>
    )
}
export default Norespondidas