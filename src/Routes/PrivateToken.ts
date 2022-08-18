import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextAuth } from "../Contexts/UserContext";

export default function PrivateToken() {
  const tokenUser = useContext(ContextAuth);
  const navigate = useNavigate();
  if (!tokenUser.isAuthenticated) {
    navigate("/");
  }
}
