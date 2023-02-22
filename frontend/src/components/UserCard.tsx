import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import { EditUserDialog } from "./DetailsDialog";
import UserService, { roleEnum, userInterface } from "../services/users";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
interface UserCardProps {
  name: string;
  role: roleEnum;
  id: string;
}
const UserCard = ({ name, role, id }: UserCardProps) => {
  const [open, setOpen] = useState(false);
  const user: userInterface = { name, role, id };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const handleRemove = async () => {
    await UserService.removeUser(id);
    location.reload();
  };

  return (
    <Card
      sx={{ width: 400, margin: 5, backgroundColor: "#080541" }}
      elevation={8}
    >
      <CardContent sx={{ textAlignLast: "start" }}>
        <Typography sx={{ fontSize: 22 }} color="white" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          {role}
        </Typography>
      </CardContent>
      <CardActions sx={{ gap: 2, pt: 2 }}>
        <IconButton onClick={handleClickOpen} color="primary">
          <EditIcon />
        </IconButton>
        <IconButton onClick={handleRemove} color="primary">
          <DeleteForeverIcon />
        </IconButton>
        <EditUserDialog open={open} onClose={handleClose} user={user} />
      </CardActions>
    </Card>
  );
};

export { UserCard };
