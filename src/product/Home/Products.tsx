import React from "react";
import {
  Box,
  Container,
  Heading,
  Flex,
  Button,
  Skeleton,
  SkeletonText,
  Link,
} from "@chakra-ui/react";
import ProductSlider from "./components/ProductSlider";
import { useProducts } from "@/modules/products/useProducts";

export default function Products() {
  const { data, isLoading, isError } = useProducts({
    action: "read",
    page: 1,
    pageSize: 10,
    path: "product_list",
  });

  return (
    <Box py={12} bg="white">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" mb={8}>
          <Heading size="lg" textAlign="center">
            {isLoading ? (
              <SkeletonText noOfLines={1} width="250px" />
            ) : (
              "Produk Pilihan untuk Kebutuhan Anda"
            )}
          </Heading>
          {!isLoading && (
            <Link href="/products">
              <Button
                variant="link"
                color="teal.500"
                display={{ base: "none", md: "block" }}
              >
                Lihat Semua
              </Button>
            </Link>
          )}
        </Flex>

        {isLoading ? (
          <Flex gap={4} overflow="hidden">
            {[...Array(4)].map((_, idx) => (
              <Skeleton
                key={idx}
                width="360px"
                height="420px"
                borderRadius="lg"
              />
            ))}
          </Flex>
        ) : (
          <ProductSlider products={data?.data || []} />
        )}
      </Container>
    </Box>
  );
}
