import ContactForm from "@/product/Contact/ContactForm";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

interface PurchaseFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PurchaseFormModal({
  isOpen,
  onClose,
}: PurchaseFormModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="xl" mx={4}>
        <ModalHeader
          fontSize="xl"
          fontWeight="semibold"
          color="grayscale.900"
          textAlign="center"
          pt={10}
          px={10}
        >
          Isi Data Diri Anda
          <Text fontSize="sm" fontWeight="normal" color="grayscale.600" mt={2}>
            Isi form di bawah ini untuk mempermudah proses permintaan Anda.
          </Text>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody pb={8} px={10}>
          <ContactForm onFormSubmit={onClose} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
