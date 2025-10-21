import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import getConfig from "next/config";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  ownerName: string;
  storeName: string;
  address: string;
  purpose: string;
  phoneNumber: string;
};

type ContactFormProps = {
  onFormSubmit?: () => void;
};

const { publicRuntimeConfig } = getConfig();

export default function ContactForm({ onFormSubmit }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const adminWhatsApp = publicRuntimeConfig.adminWhatsAppNumber;
      const chatFormat = publicRuntimeConfig.adminWhatsAppChatFormat;

      if (!adminWhatsApp || !chatFormat) {
        throw new Error("WhatsApp configuration is missing");
      }

      const message = chatFormat
        .replace("{ownerName}", data.ownerName)
        .replace("{storeName}", data.storeName)
        .replace("{address}", data.address)
        .replace("{purpose}", data.purpose)
        .replace("{phoneNumber}", data.phoneNumber);

      const whatsappUrl = `https://wa.me/${adminWhatsApp}?text=${encodeURIComponent(message)}`;

      window.open(whatsappUrl, "_blank");
      toast({
        title: "Form submitted",
        description:
          "You will be redirected to WhatsApp to continue the conversation.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to redirect to WhatsApp. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
      onFormSubmit && onFormSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        <FormControl isInvalid={!!errors.ownerName} isRequired>
          <FormLabel fontSize="md">Nama Pemilik </FormLabel>
          <Input
            placeholder="Masukkan nama pemilik"
            size="md"
            {...register("ownerName", {
              required: "Nama pemilik harus diisi",
            })}
          />
          <FormErrorMessage>{errors.ownerName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.storeName} isRequired>
          <FormLabel fontSize="md">Nama Toko </FormLabel>
          <Input
            placeholder="Masukkan nama toko"
            size="md"
            {...register("storeName", {
              required: "Nama toko harus diisi",
            })}
          />
          <FormErrorMessage>{errors.storeName?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.address} isRequired>
          <FormLabel fontSize="md">Alamat</FormLabel>
          <Textarea
            placeholder="Masukkan alamat lengkap"
            size="md"
            rows={3}
            {...register("address", { required: "Alamat harus diisi" })}
          />
          <FormErrorMessage>{errors.address?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.purpose} isRequired>
          <FormLabel fontSize="md">Keperluan</FormLabel>
          <Textarea
            placeholder="Jelaskan keperluan"
            size="md"
            rows={3}
            {...register("purpose", {
              required: "Keperluan harus diisi",
            })}
          />
          <FormErrorMessage>{errors.purpose?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.phoneNumber} isRequired>
          <FormLabel fontSize="md">Nomor Telepon</FormLabel>
          <Input
            placeholder="(000) 000 000"
            size="md"
            {...register("phoneNumber", {
              required: "Nomor telepon harus diisi",
              pattern: {
                value: /^[0-9()-\s]+$/,
                message: "Format nomor telepon tidak valid",
              },
            })}
          />
          <FormErrorMessage>{errors.phoneNumber?.message}</FormErrorMessage>
        </FormControl>

        <Button
          type="submit"
          size="lg"
          width="full"
          colorScheme="teal"
          bg="primary.500"
          isLoading={isSubmitting}
          mt={2}
        >
          Kirim
        </Button>
      </Stack>
    </form>
  );
}
