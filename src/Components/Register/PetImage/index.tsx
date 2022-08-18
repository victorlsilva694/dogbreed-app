import { observer } from "mobx-react-lite";
import { ImagesPet } from './styles'

function PetImages() {

  return(
    <ImagesPet >

      <div className="image-container">
        <img style={{width: '100%'}} src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80" alt="" />
      </div>
    
    </ImagesPet>
  )
}

export default observer(PetImages);