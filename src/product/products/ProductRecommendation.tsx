import type {
  Product,
  ProductsResponse,
} from "@/modules/products/ProductEntity";
import {
  Box,
  Grid,
  Heading,
  Icon,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import ProductCard from "./components/ProductCard";
import { Package } from "@phosphor-icons/react/dist/csr/Package";

type ProductRecommendationsProps = {
  products?: Product[];
  isLoading: boolean;
};

export default function ProductRecommendations({
  products,
  isLoading,
}: ProductRecommendationsProps) {
  return (
    <Stack
      spacing={{ base: 12, md: 10 }}
      bg="white"
      px={{ base: 6, md: 20 }}
      py={{ base: 10, md: 20 }}
    >
      <Heading
        as="h2"
        fontSize={{ base: "32px", md: "40px" }}
        fontWeight="semibold"
        textAlign="center"
      >
        Rekomendasi untuk Anda
      </Heading>

      {isLoading ? (
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {[...Array(4)].map((_, idx) => (
            <Skeleton key={idx} height="300px" borderRadius="lg" />
          ))}
        </Grid>
      ) : products && products.length > 0 ? (
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          gap={6}
        >
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} maxImageHeight="320px" />
          ))}
        </Grid>
      ) : (
        <Box textAlign="center" py={10} px={6} borderRadius="lg" bg="gray.50">
          <Icon as={Package} boxSize={12} color="gray.400" mb={4} />
          <Heading as="h3" size="lg" mb={2}>
            Tidak ada rekomendasi saat ini
          </Heading>
          <Text color="gray.500">
            Maaf, kami belum memiliki rekomendasi produk untuk Anda saat ini.
            Silakan cek kembali nanti.
          </Text>
        </Box>
      )}
    </Stack>
  );
}
