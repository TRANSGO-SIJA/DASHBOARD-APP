"use client";
import { AlertForceModal } from "@/components/modal/alertforce-modal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { User } from "@/constants/data";
import { useDeleteOrder } from "@/hooks/api/useOrder";
import { useQueryClient } from "@tanstack/react-query";
import { Edit, MoreHorizontal, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CellActionProps {
  data: User;
}

export const CellAction: React.FC<CellActionProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [force, setForce] = useState(false);

  const router = useRouter();
  const id = data?.id;
  const queryClient = useQueryClient();

  const { mutateAsync: deleteOrder } = useDeleteOrder(id, force);

  const onConfirm = async () => {
    setLoading(true);
    deleteOrder(id, {
      onSuccess: () => {
        toast({
          variant: "success",
          title: "Order berhasil dihapus!",
        });
        router.refresh();
      },
      onError: (error) => {
        toast({
          variant: "destructive",
          title: "Oops! Ada error.",
          //@ts-ignore
          description: `Something went wrong: ${error?.response?.data?.message}`,
        });
        queryClient.invalidateQueries({ queryKey: ["orders"] });
      },
      onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["orders"] });
        setLoading(false);
        setOpen(false);
      },
    });
  };

  return (
    <>
      <AlertForceModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onConfirm}
        loading={loading}
        data={data}
        checked={force}
        setChecked={setForce}
      />
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger onClick={(e) => e.stopPropagation()} asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>

          <DropdownMenuItem
            onClick={(e) => {
              e.stopPropagation();
              router.push(`/dashboard/orders/${data?.id}/edit`);
            }}
          >
            <Edit className="mr-2 h-4 w-4" /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-red-500"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
          >
            <Trash className="mr-2 h-4 w-4" /> Hapus
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
