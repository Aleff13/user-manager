import * as React from "react";
import Typography from "@mui/material/Typography";
import { Card, CardActions, CardContent, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { DetailsDialog } from "./DetailsDialog";
import UserService, { roleEnum } from "../services/users";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface UserCardProps {
  name: string;
  role: roleEnum;
  id: string;
}
const UserCard = ({ name, role, id }: UserCardProps) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

  const handleRemove = async () => {
    await UserService.removeUser(id);
  };

  return (
    <Card
      sx={{ width: 400, margin: 5, backgroundColor: "#080541" }}
      elevation={8}
    >
      <CardContent sx={{ textAlignLast: "start" }}>
        <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
          {name}
        </Typography>
        <Typography variant="body2" color="white" sx={{ fontSize: 16 }}>
          {role}
        </Typography>
      </CardContent>
      <CardActions sx={{ gap: 2, pt: 2 }}>
        <IconButton onClick={handleClickOpen} color="primary">
          <VisibilityIcon />
        </IconButton>
        <IconButton onClick={handleRemove} color="primary">
          <DeleteForeverIcon />
        </IconButton>
        <DetailsDialog
          open={open}
          onClose={handleClose}
          name={name}
          role={role}
          isDetails
        />
      </CardActions>
    </Card>
  );
};

export { UserCard };
