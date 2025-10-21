import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  Image,
  Link,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box position="relative" bg="primary.900" py="180px" textAlign="center">
      <Container maxW="container.md">
        <VStack spacing={6}>
          <VStack spacing={4}>
            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "56px" }}
              fontWeight="semibold"
              lineHeight={{ base: "1.2", md: "67.2px" }}
            >
              Menggerakkan Dunia dengan Teknologi Air
            </Heading>
            <Text
              color="grayscale.200"
              fontSize={{ base: "md", md: "md" }}
              maxW={{ base: "100%", md: "80%" }}
            >
              Lebih dari 15 tahun mengembangkan solusi pompa andal dan efisien
              untuk memenuhi kebutuhan industri dan rumah tangga.
            </Text>
          </VStack>
          <Link href="/contact">
            <Button
              colorScheme="teal"
              size="lg"
              px={8}
              bg="primary.500"
              _hover={{ bg: "primary.700" }}
            >
              <Text fontSize="md" fontWeight="medium">
                Hubungi Kami Sekarang
              </Text>
            </Button>
          </Link>
        </VStack>
      </Container>
      <Box
        backgroundImage="/images/about-hero-pattern.svg"
        position="absolute"
        bottom={0}
        left={0}
        right={0}
        width="100%"
        height="84px"
        backgroundRepeat="repeat-x"
        backgroundSize="stretch"
      />
    </Box>
  );
}
