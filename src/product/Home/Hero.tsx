import {
  Box,
  Button,
  Container,
  Heading,
  Text,
  Image,
  Flex,
  Stack,
  Link,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Container maxW="container.xl" px={6}>
      <Flex
        pt={8.5}
        pb={18.5}
        align="center"
        justifyContent="center"
        direction={{ base: "column", lg: "row" }}
      >
        <Stack spacing={9} flex={1}>
          <Stack spacing={4}>
            <Text
              fontSize={{ base: "5xl", lg: "6xl" }}
              fontWeight="semibold"
              color="grayscale.900"
              lineHeight={{ base: "50px", lg: "120%" }}
            >
              Solusi Pompa Air Terbaik untuk Setiap Kebutuhan Anda
            </Text>
            <Text fontSize="md" color="grayscale.600" maxW="600px">
              Temukan pilihan pompa air yang dirancang untuk berbagai keperluan:
              irigasi pertanian, kebutuhan rumah tangga, hingga penggunaan
              komersial berskala besar.
            </Text>
          </Stack>
          <Link href="/products">
            <Button colorScheme="teal" size="lg" px={8} fontSize="md">
              Jelajahi Produk
            </Button>
          </Link>
        </Stack>

        <Flex
          flex={1}
          justifyContent="flex-end"
          display={{ base: "none", lg: "flex" }}
        >
          <Image
            src="/images/hero-thumbnail.png"
            alt="Water Pump"
            w={310}
            h="auto"
            aspectRatio={310 / 535}
            objectFit="contain"
          />
        </Flex>
      </Flex>
    </Container>
  );
}
