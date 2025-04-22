import { Button, Card } from "@mui/material";
import { useContext } from "react";
import { userContext } from "../../context/userContext";
import "./topbar.css";

export const TopBar = () => {
  const { userState, userDispatch } = useContext(userContext);
  return (
    <>
      <Card>
        <h4>Top Bar {userState.name}</h4>
      </Card>
    </>
  );
};
