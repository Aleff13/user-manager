import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./App.css";
import { AddUserDilog } from "./components/AddUserDialog";
import { UserCard } from "./components/structureCard";
import UserService, { roleEnum, userInterface } from "./services/users";

const App = () => {
  const [open, setOpen] = React.useState(false);
  const [users, setUsers] = useState<userInterface[]>([
    {
      name: "claudia",
      role: roleEnum.user,
      id: "123456",
    },
  ]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchMock = async () => {
      const usersData = await UserService.getUsers();
      setUsers(usersData);
    };
    fetchMock();
  }, []);

  return (
    <Container>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", marginTop: "25px" }}
        color="white"
      >
        Users
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          pt: 2,
        }}
      >
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: 20, width: "fit-content" }}
          onClick={handleClickOpen}
        >
          Add new user
        </Button>
        <AddUserDilog open={open} onClose={handleClose}></AddUserDilog>
        {users.map((user) => (
          <UserCard
            id={user.id || ""}
            name={user.name}
            role={user.role}
            key={user.id}
          ></UserCard>
        ))}
      </Box>
    </Container>
  );
};

export default App;
