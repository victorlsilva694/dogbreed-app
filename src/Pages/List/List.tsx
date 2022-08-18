import { observer } from "mobx-react-lite";
import Menu from "../../Components/List/Menu/Menu";

function List() {

  return(
    <>
      <Menu />
    </>
  )
}

export default observer(List);