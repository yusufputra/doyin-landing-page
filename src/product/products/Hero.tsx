import { Box, Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function Hero() {
  return (
    <Box
      position="relative"
      height={{ base: "600px", lg: "720px" }}
      overflow="hidden"
      bgImage="/images/product-hero-thumbnail.png"
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <Container
        maxW="container.xl"
        height="full"
        flexDir="row"
        alignContent="center"
        px={6}
      >
        <Box
          maxW={{ base: "100%", md: "756px" }}
          bg="primary.900"
          p={{ base: "56px 24px", md: 14 }}
        >
          <Stack spacing={6} py={{ base: "10px", md: 13 }}>
            <Heading
              fontSize={{ base: "4xl", md: "56px" }}
              fontWeight="medium"
              color="white"
              lineHeight="120%"
            >
              Pompa Air Andal untuk Segala Keperluan
            </Heading>
            <Text
              fontSize={{ base: "lg", lg: "xl" }}
              color="white"
              lineHeight="tall"
            >
              Meningkatkan tekanan air dan kebutuhan sehari-hari dengan pompa
              yang hemat daya dan mudah diinstal.
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
