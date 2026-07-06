import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

interface Props {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

function ClearCartDialog({ open, onClose, onConfirm }: Props) {
  return (
    <Dialog open={open}>
      <DialogTitle>Clear Cart</DialogTitle>

      <DialogContent>Are you sure you want to remove all items?</DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>

        <Button color="error" onClick={onConfirm}>
          Clear
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ClearCartDialog;
