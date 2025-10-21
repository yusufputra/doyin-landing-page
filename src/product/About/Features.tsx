import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Icon,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { CheckCircle } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { CurrencyCircleDollar } from "@phosphor-icons/react/dist/csr/CurrencyCircleDollar";
import { Lightning } from "@phosphor-icons/react/dist/csr/Lightning";
import { GlobeHemisphereEast } from "@phosphor-icons/react/dist/csr/GlobeHemisphereEast";

export default function Features() {
  const features = [
    {
      icon: CheckCircle,
      title: "Keahlian Profesional",
      description:
        "Tim ahli yang fokus pada teknologi terbaik. Tim ahli yang fokus pada teknologi terbaik. Tim ahli yang fokus pada teknologi terbaik. Tim ahli yang fokus pada teknologi terbaik.",
    },
    {
      icon: CurrencyCircleDollar,
      title: "Harga Kompetitif",
      description:
        "Memberikan solusi hemat biaya tanpa mengurangi standar kualitas. mengurangi standar. Memberikan solusi hemat biaya tanpa mengurangi standar kualitas. mengurangi standar.",
    },
    {
      icon: Lightning,
      title: "Kualitas Unggul",
      description:
        "Material premium yang memastikan performa produk tahan lama dan terpercaya. Material premium yang memastikan performa produk tahan lama dan terpercaya.",
    },
    {
      icon: GlobeHemisphereEast,
      title: "Kemitraan Strategis",
      description:
        "Kolaborasi erat dengan mitra global untuk membangun hubungan jangka panjang. Kolaborasi erat dengan mitra global untuk membangun hubungan jangka panjang.",
    },
  ];

  return (
    <Box id="company-excellence" py={20} bg="primary.50">
      <Container maxW="container.xl" px={{ base: 6, md: 10 }}>
        <VStack spacing={20}>
          <VStack spacing={4} textAlign="center">
            <Heading
              color="grayscale.900"
              fontSize={"40px"}
              lineHeight={"48px"}
              fontWeight="semibold"
            >
              Nilai di Balik Produk Kami
            </Heading>
            <Text
              color="grayscale.700"
              fontSize={"lg"}
              lineHeight="27px"
              maxW="850px"
            >
              Di Dongyin, nilai-nilai kami menjadi inti dari setiap langkah dan
              inovasi. Kami menciptakan solusi canggih yang tidak hanya untuk
              pelanggan, tetapi juga mencerminkan standar terbaik yang kami
              junjung.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 12, lg: "52px" }}
            maxW="1200px"
            px={{ base: 4, md: "72px" }}
          >
            {features.map((feature, idx) => (
              <Stack key={idx} spacing={8}>
                <Icon
                  as={feature.icon}
                  boxSize={{ base: 12, md: 16 }}
                  color="white"
                  fill="primary.500"
                />
                <Stack spacing={4}>
                  <Heading
                    fontSize={{ base: "xl", md: "32px" }}
                    lineHeight={{ base: "28px", md: "38px" }}
                    fontWeight="semibold"
                  >
                    {feature.title}
                  </Heading>
                  <Text
                    color="grayscale.800"
                    fontSize={{ base: "sm", md: "lg" }}
                    lineHeight={{ base: "21px", md: "27px" }}
                    fontWeight="normal"
                  >
                    {feature.description}
                  </Text>
                </Stack>
              </Stack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
