import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Envelope } from "@phosphor-icons/react/dist/csr/Envelope";
import { MapPin } from "@phosphor-icons/react/dist/csr/MapPin";
import { Phone } from "@phosphor-icons/react/dist/csr/Phone";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon",
      content: "+62 895 8237 1190",
    },
    {
      icon: Envelope,
      title: "Email",
      content: "doyin@mail.com",
    },
    {
      icon: MapPin,
      title: "Alamat",
      content:
        "No.19 South of Songjiang Road, Eastern New District, Wening, Zhejiang China",
    },
  ];

  return (
    <Box
      pt={{ base: "72px", md: "100px" }}
      pb={{ base: "54px", md: "88px" }}
      px={{ base: 6, md: "120px" }}
      bg="primary.50"
    >
      <Container maxW="container.xl" px={0}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 10, md: "149px" }}
        >
          <Stack spacing={{ base: 8, md: 14 }}>
            <Stack spacing={4}>
              <Heading
                fontSize={{ base: "40px", md: "48px" }}
                lineHeight={{ base: "48px", md: "57px" }}
                fontWeight="semibold"
                color="grayscale.900"
              >
                Butuh Bantuan?
              </Heading>
              <Text color="grayscale.600" fontSize={{ base: "sm", md: "md" }}>
                Jangan ragu untuk menghubungi kami. Tim kami siap memberikan
                solusi terbaik untuk kebutuhan pompa air Anda.
              </Text>
            </Stack>

            <Stack spacing={6}>
              {contactInfo.map((item, idx) => (
                <Stack
                  key={idx}
                  direction="row"
                  spacing={4}
                  p={4}
                  bg="white"
                  borderRadius="lg"
                  align={idx === 2 ? "flex-start" : "center"}
                  boxShadow="0px 1px 2px 0px #0C111C14, 0px 1px 3px 0px #0C111C0A"
                >
                  <Flex
                    p={"11px"}
                    bg="primary.100"
                    borderRadius="md"
                    w={42}
                    h={42}
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={item.icon} boxSize={5} color="teal.600" />
                  </Flex>
                  <Stack spacing={0.5}>
                    <Text fontWeight="medium" color="grayscale.900">
                      {item.title}
                    </Text>
                    <Text fontWeight="normal" color="grayscale.600">
                      {item.content}
                    </Text>
                  </Stack>
                </Stack>
              ))}
            </Stack>
          </Stack>

          <Box
            bg="white"
            p={8}
            px={{ base: 5, md: 10 }}
            borderRadius="xl"
            boxShadow="sm"
            border="1px"
            borderColor="gray.100"
          >
            <ContactForm />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}
