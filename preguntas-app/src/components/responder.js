import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Responder = () => {
    return(
        <div className="padre">
        
        <div className="hijo">
        
          
    <Form className="Form-log">
    <textarea className="textarea" name="textarea" rows="1" cols="7" disabled="true">Que necesito para centrar un div?</textarea>
    <p></p>
    <textarea className="textarea" name="textarea" rows="1" cols="7"></textarea>
 <div >
  <Button variant="warning btn-sm" type="submit">
    Responder
  </Button></div>
  <div >
  <Button variant="info btn-lg" type="submit">
    Siguiente Pregunta
  </Button></div>


</Form>



</div>


</div>




    )
}
export default Responder