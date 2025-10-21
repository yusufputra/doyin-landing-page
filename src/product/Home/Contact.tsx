import {
  Box,
  Heading,
  Text,
  Button,
  Image,
  Flex,
  Link,
} from "@chakra-ui/react";

export default function Contact() {
  return (
    <Box bg="primary.500" color="white">
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        <Box flex={1} p={{ base: 8, lg: "80px 120px" }} maxW="3xl">
          <Heading as="h2" size="xl" mb={4}>
            Temukan Solusi Pompa Terbaik
          </Heading>
          <Text fontSize="lg" mb={6}>
            Hubungi kami sekarang dan dapatkan solusi pompa yang sesuai untuk
            kebutuhan Anda.
          </Text>

          <Link href="/contact">
            <Button colorScheme="whiteAlpha">Hubungi Kami</Button>
          </Link>
        </Box>
        <Box position="relative" display={{ base: "none", md: "block" }}>
          <Box
            position="absolute"
            left={0}
            top={0}
            bottom={0}
            width="50%"
            bgGradient="linear(to-r, primary.500, transparent)"
            zIndex={1}
          />
          <Image
            src="/images/contact-banner-thumbnail.png"
            alt="Customer Service"
            maxH="380px"
            objectFit="cover"
            position="relative"
            zIndex={0}
          />
        </Box>
      </Flex>
    </Box>
  );
}
