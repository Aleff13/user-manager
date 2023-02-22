import { Dialog, DialogTitle } from "@mui/material";
import { roleEnum } from "../services/users";
// import { MarkdownIndex } from "../services/constants";
import Markdown from "./markdown";

export interface SimpleDialogProps {
  open: boolean;
  onClose: (value: string) => void;
  name: string;
  role: roleEnum;
  isDetails: boolean;
}

export const DetailsDialog = ({
  open,
  onClose,
  name,
  role,
  isDetails = false,
}: SimpleDialogProps) => {
  return (
    <Dialog onClose={onClose} open={open} maxWidth={"xl"}>
      <DialogTitle variant="h3">{name.toUpperCase()}</DialogTitle>
      {/* <Markdown content={props.content}></Markdown> */}
    </Dialog>
  );
};
