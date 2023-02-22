import {
  Button,
  Dialog,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { Container } from "@mui/system";
import { ChangeEvent, useState } from "react";
import UserService, { roleEnum, userInterface } from "../services/users";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export const AddUserDilog = ({ open, onClose }: SimpleDialogProps) => {
  const [role, setRole] = useState<roleEnum>(roleEnum.user);
  const [name, setName] = useState<string>("");

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string as roleEnum);
  };

  const handleNameChange = (event: ChangeEvent) => {
    setName(event.target?.value || "");
  };

  const onSave = async () => {
    const user: userInterface = {
      name,
      role,
    };
    //call method to add user
    await UserService.addUser(user);
    onClose();
  };

  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"}>
      <Container
        sx={{
          marginTop: 10,
          width: 500,
          height: 300,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={handleNameChange}
            value={name}
          />
          <br></br>
          <Select
            id="demo-simple-select"
            value={role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={roleEnum.admin}>Admin</MenuItem>
            <MenuItem value={roleEnum.user}>User</MenuItem>
            <MenuItem value={roleEnum.userPremium}>Premium</MenuItem>
          </Select>
        </FormControl>
        <br></br>
        <Button variant="contained" color="success" onClick={onSave}>
          Add
        </Button>
        <br></br>

        <Button variant="outlined" color="error" onClick={onClose}>
          Cancel
        </Button>
      </Container>
    </Dialog>
  );
};
