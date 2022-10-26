import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

const Registro = () => {
    return(
        <div className="padre">
        <div className="hijo">
    <Form className="Form-log">
    <Form.Label>Registro</Form.Label>
  <Form.Group className="mb-0" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
     
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-0" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-2" controlId="formBasicPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
 
  <Button variant="warning btn-lg" type="submit">
    Ingresar
  </Button>


</Form></div></div>
    )
}
export default Registro