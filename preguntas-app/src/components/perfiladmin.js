import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Label from 'react-bootstrap/Form';

 
const Perfiladmin = () => {
    return(
      <div className="padre" style= {{paddingBottom: '500px'}}>
      <div className="hijo"  style= {{paddingBottom: '0px'}} >
  <Form className="Form-log">
<Form.Group className="mb-0" controlId="formBasicEmail">
  <Form.Label>Agrega una categoria</Form.Label>
  <Form.Control type="email" placeholder="nombre de categoria" />
  <Form.Text className="text-muted">
   
  </Form.Text>
</Form.Group>
<p></p>
<Button variant="warning btn-lg" type="submit" id="ingresar" >
  Agregar
</Button>




</Form></div><p></p>
<Label>Reportes Administrador</Label>
<Button variant="info btn-lg" type="submit" id="ingresar" >
  Reporte#1
</Button>
<Button variant="info btn-lg" type="submit" id="ingresar" >
  Reporte#2
</Button>
<Button variant="info btn-lg" type="submit" id="ingresar" >
  Reporte#3
</Button>
</div>
    )
}
export default Perfiladmin