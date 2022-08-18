import { observer } from "mobx-react-lite";
import Form from "./Form/Form";
import PetImage from "./PetImage";
import { Container } from "./styles";

function RegisterPage() {
  return(
    <Container>
      <Form />
      <PetImage />
    </Container>

  )
}

export default observer(RegisterPage);