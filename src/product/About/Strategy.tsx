import {
  Box,
  Container,
  Grid,
  Heading,
  Text,
  Image,
  Stack,
} from "@chakra-ui/react";

export default function Strategy() {
  return (
    <Box
      id="company-strategy"
      py={"120px"}
      px={{ base: 6, md: "120px" }}
      bg="white"
    >
      <Container maxW="container.xl" px={0}>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={20}
          alignItems="center"
        >
          <Image
            src="/images/about-us-strategy-thumbnail.png"
            alt="Business handshake"
            borderRadius="xl"
            objectFit="cover"
            height="auto"
            aspectRatio={{ base: 327 / 260, md: 568 / 408 }}
            w={"100%"}
            maxH={{ base: "260px", md: "408px" }}
          />

          <Stack
            spacing={8}
            alignSelf="flex-start"
            py={{ base: 0, md: "17px" }}
          >
            <Heading
              fontSize="32px"
              lineHeight="38px"
              fontWeight="semibold"
              color="grayscale.900"
            >
              Strategi Globalisasi
            </Heading>

            <Stack spacing={{ base: 5, md: 6 }}>
              <Stack py={2} spacing={4}>
                <Heading
                  color="grayscale.900"
                  fontSize="24px"
                  lineHeight="28px"
                  fontWeight="semibold"
                >
                  Mitra Terbaik
                </Heading>
                <Text
                  fontSize="lg"
                  fontWeight="normal"
                  lineHeight="27px"
                  color="grayscale.700"
                >
                  Kami berkomitmen membangun kemitraan strategis yang saling
                  menguntungkan dengan pelanggan dan mitra bisnis di seluruh
                  dunia.
                </Text>
              </Stack>

              <Stack py={2} spacing={4}>
                <Heading
                  color="grayscale.900"
                  fontSize="24px"
                  lineHeight="28px"
                  fontWeight="semibold"
                >
                  Produk Unggulan
                </Heading>
                <Text
                  fontSize="lg"
                  fontWeight="normal"
                  lineHeight="27px"
                  color="grayscale.700"
                >
                  Dongyin terus menciptakan inovasi pompa air terbaik, yang
                  mengutamakan kualitas terbaik meski harga pompa sumur yang
                  terjangkau di dunia.
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Container>
    </Box>
  );
}
