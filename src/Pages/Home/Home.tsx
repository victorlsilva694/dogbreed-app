import { observer } from "mobx-react-lite";
import RegisterPage from "../../Components/Register/RegisterPage";

function Home() {
  return(
    <RegisterPage />
  );
}

export default observer(Home);