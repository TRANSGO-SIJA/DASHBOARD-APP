"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading?: boolean;
  onConfirm: (reason: string) => void;
}

export const ConfirmModalWithInput: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  loading,
  onConfirm,
}) => {
  const [reason, setReason] = useState<string>("");
  const onChange = (open: boolean) => {
    if (!open) {
      onClose();
    }
  };

  useEffect(() => {
    if (!isOpen) {
      setReason("");
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left">
            Apakah anda yakin menyetujui Customer ini?
          </DialogTitle>
        </DialogHeader>
        <div className="">
          <Label htmlFor="reason" className="relative label-required">
            Alasan
          </Label>
          <Textarea
            placeholder="Berikan Komentar atas Data yang Perlu Dilengkapi"
            id="reason"
            rows={4}
            name="reason"
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <div className="space-x-2 flex items-center justify-end w-full">
          <Button
            disabled={loading}
            variant="outline"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
          >
            Kembali
          </Button>
          <Button
            disabled={loading || !reason.trim()}
            className="bg-green-600 text-white hover:bg-red-100 px-5 py-5 text-[12px]"
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onConfirm(reason);
            }}
          >
            Setuju Dengan<br />Data Tambahan!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
