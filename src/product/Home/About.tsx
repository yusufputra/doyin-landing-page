import {
  Box,
  Button,
  Container,
  Heading,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Play } from "@phosphor-icons/react/dist/csr/Play";

export default function About() {
  return (
    <Box p={{ base: "80px 24px", md: 0 }} py={{ base: 16, md: 120 }} bg="white">
      <Container
        bg="primary.50"
        maxW="container.xl"
        p={{ base: 6, md: "100px 80px" }}
        rounded="2xl"
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
          <Box order={{ base: 2, md: 1 }}>
            <Heading
              as="h2"
              size={{ base: "xl", md: "2xl" }}
              mb={4}
              color="grayscale.900"
            >
              Tentang Dongyin
            </Heading>
            <Text
              mb={4}
              color="grayscale.700"
              fontSize={{ base: "md", md: "lg" }}
            >
              Didirikan pada tahun 1987, Dongyin Technology Co., Ltd. adalah
              pemimpin dalam industri pompa dengan pengalaman lebih dari 35
              tahun. Berlokasi di Tiongjok, kami berspesialisasi dalam
              penelitian, pengembangan, dan produksi berbagai jenis pompa
              submersible, multistage, dan solusi air lainnya.
            </Text>
            <Text
              mb={6}
              color="grayscale.700"
              fontSize={{ base: "md", md: "lg" }}
            >
              Dengan lebih dari 40 juta produk yang terjual di lebih dari 120
              negara, Dongyin telah membuktikan keahliannya di pasar global.
              Pompa kami melayani beragam sektor seperti irigasi, pemrosesan
              air, dan aplikasi industri, yang dikenal akan efisiensi dan
              keandalan.
            </Text>
            <Link href="/about-us">
              <Button colorScheme="teal" variant="solid">
                Baca selengkapnya
              </Button>
            </Link>
          </Box>
          <Box order={{ base: 1, md: 2 }}>
            <Box position="relative" cursor="pointer">
              <Image
                src="/images/about-us-video-thumbnail.png"
                alt="Dongyin Building"
                borderRadius="lg"
                w="full"
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
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
