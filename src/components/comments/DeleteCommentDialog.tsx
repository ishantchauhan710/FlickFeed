import { CommentData, PostData } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import LoadingButton from "../LoadingButton";
import { Button } from "../ui/button";
import { useDeleteCommentMutation } from "./mutations";

interface DeleteCommentDialogProps {
  comment: CommentData;
  open: boolean;
  onClose: () => void;
}

export default function DeleteCommentDialog({
  comment,
  open,
  onClose,
}: DeleteCommentDialogProps) {
  const mutation = useDeleteCommentMutation();

  function handleOpenChange(open: boolean) {
    if (!open || !mutation.isPending) {
      onClose();
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Comment</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this comment?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <LoadingButton
            variant="destructive"
            onClick={() =>
              mutation.mutate(comment.id, {
                onSuccess: () => {
                  onClose();
                },
              })
            }
            loading={mutation.isPending}
          >
            Delete
          </LoadingButton>
          <Button
            variant="outline"
            onClick={onClose}
            disabled={mutation.isPending}
          >
            Cancel
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
