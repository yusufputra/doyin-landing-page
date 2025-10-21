import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Stack,
  Grid,
  GridItem,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { Play } from "@phosphor-icons/react/dist/csr/Play";

export default function About() {
  const stats = [
    { value: "6+", label: "Tahun di industri" },
    { value: "1,298", label: "Pompa terjual" },
    { value: "143", label: "Cabang tersebar" },
  ];

  return (
    <Box id="company-profile" py={{ base: 20, md: "120px" }} bg="white">
      <Container maxW="container.xl" px={{ base: 6, md: "140px" }}>
        <Stack spacing={{ base: 16, md: 20 }}>
          <Box position="relative" cursor="pointer">
            <Image
              src="/images/about-us-video-thumbnail.png"
              alt="Dongyin Building"
              width="100%"
              height="auto"
              borderRadius="2xl"
              objectFit="cover"
              maxH={{ base: "200px", md: "530px" }}
            />
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="#FFFFFF52"
              borderRadius="full"
              p={{ base: 4, md: 5 }}
              boxShadow="lg"
              w={{ base: "68px", md: "88px" }}
              h={{ base: "68px", md: "88px" }}
            >
              <Icon
                as={Play}
                w={{ base: "38px", md: "48px" }}
                h={{ base: "38px", md: "48px" }}
                color="white"
              />
            </Box>
          </Box>

          <Grid
            templateColumns={{ base: "1fr", lg: "300px 1fr" }}
            gap={{ base: 4, lg: 16 }}
          >
            <GridItem>
              <Heading
                fontSize={{ base: "32px", lg: "40px" }}
                lineHeight={{ base: "38px", lg: "48px" }}
                fontWeight="semibold"
                color="grayscale.900"
              >
                Tentang Dongyin
              </Heading>
            </GridItem>

            <GridItem>
              <Stack spacing={8}>
                <Stack spacing={6}>
                  <Text
                    color="grayscale.700"
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    Didirikan pada tahun 1987, Dongyin Technology Co., Ltd.
                    adalah pemimpin dalam industri pompa dengan pengalaman lebih
                    dari 35 tahun. Berbasis di Tiongkok, kami berspesialisasi
                    dalam penelitian, pengembangan, dan produksi berbagai jenis
                    pompa submersible, multiguna, dan solusi air lainnya.
                  </Text>
                  <Text
                    color="grayscale.700"
                    fontSize={{ base: "md", md: "lg" }}
                  >
                    Dengan lebih dari 40 juta produk yang terjual di lebih dari
                    120 negara, Dongyin telah membuktikan keahliannya di pasar
                    global. Pompa kami melayani beragam sektor seperti irigasi,
                    pemrosesan air, dan aplikasi industri, yang dikenal akan
                    efisiensi dan keandalannya.
                  </Text>
                </Stack>

                <Divider />

                <SimpleGrid columns={3} gap={{ base: "14px", md: 8 }}>
                  {stats.map((stat, idx) => (
                    <Stack key={idx} gap={{ base: 2, md: 3 }}>
                      <Text
                        color="grayscale.600"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="normal"
                        lineHeight="24px"
                      >
                        {stat.label}
                      </Text>
                      <Text
                        fontSize={{ base: "32px", md: "40px" }}
                        lineHeight={{ base: "38px", md: "48px" }}
                        fontWeight="semibold"
                        color="primary.500"
                      >
                        {stat.value}
                      </Text>
                    </Stack>
                  ))}
                </SimpleGrid>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
