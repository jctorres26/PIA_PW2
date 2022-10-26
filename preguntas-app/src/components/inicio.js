import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/Form';

const Inicio = () => {
    return(
        <div className="padre">
        
        <div className="hijo">

                 
        <Label>Haz tu pregunta!</Label>
    <Form className="Form-log">
    <textarea className="textarea" name="textarea" rows="1" cols="7" ></textarea>
    <div >
  <Button variant="warning btn-sm" type="submit">
    Publicar
  </Button></div>
  <div ></div>
   
 </Form>
        
          
        <Label>Preguntas Recientes</Label>
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



</div>


</div>




    )
}
export default Inicio