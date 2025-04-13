import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

type ConfirmProps = {
  stateOpen: {
    isOpen: boolean;
    onOpen: () => void;
    onOpenChange: (open: boolean) => void;
  };
  modal: {
    title: string;
    description: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
  };
};

export default function Confirm({ stateOpen, modal }: ConfirmProps) {
  const { isOpen, onOpenChange, onOpen } = stateOpen;

  return (
    <>
      <Modal
        isDismissable={false}
        isKeyboardDismissDisabled={true}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                {modal.title}
              </ModalHeader>
              <ModalBody>
                <p>{modal.description}</p>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={() => {
                    modal.onCancel?.();
                    onClose();
                  }}
                >
                  {modal.cancelText || "ยกเลิก"}
                </Button>
                <Button
                  color="primary"
                  onPress={() => {
                    modal.onConfirm?.();
                    onClose();
                  }}
                >
                  {modal.confirmText || "ตกลง"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
