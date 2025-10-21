import { useProducts } from "@/modules/products/useProducts";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Grid,
  Icon,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { SlidersHorizontal } from "@phosphor-icons/react/dist/csr/SlidersHorizontal";
import { Package } from "@phosphor-icons/react/dist/csr/Package";
import { useState } from "react";
import ProductCard from "./components/ProductCard";
import FilterDrawer from "./components/FilterDrawer";
import FilterSidebar from "./components/FilterSidebar";
import Pagination from "./components/Pagination";

type Product = {
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
};

export default function Catalog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const pageSize = 10;
  const { data, isLoading, isError, refetch } = useProducts({
    action: "read",
    page: currentPage,
    pageSize: pageSize,
    path: "product_list",
    productCategory: category,
  });

  const totalProducts = data?.data?.length || 0;
  const totalPages = data?.totalPage || 1;

  const handleApplyFilter = (value: string) => {
    setCategory(value);
    setCurrentPage(1);
    refetch();
  };

  const renderProductGrid = () => {
    if (isLoading) {
      return [...Array(6)].map((_, idx) => (
        <Skeleton key={idx} height="300px" borderRadius="lg" />
      ));
    }

    if (!data || data.data.length === 0) {
      return (
        <Box
          gridColumn="1 / -1"
          textAlign="center"
          py={20}
          px={4}
          bg="gray.50"
          borderRadius="lg"
        >
          <Icon as={Package} w={12} h={12} color="gray.400" mb={4} />
          <Text fontSize="xl" fontWeight="bold" color="gray.700" mb={2}>
            No products found
          </Text>
          <Text color="gray.500">
            We couldn&apos;t find any products in this category. Try adjusting your
            filters or check back later.
          </Text>
        </Box>
      );
    }

    return data.data.map((product, idx) => (
      <ProductCard key={idx} {...product} />
    ));
  };

  return (
    <Box pt={10} pb={20} px={{ base: "24px", md: "80px" }} bg="white">
      <FilterDrawer
        isOpen={isOpen}
        onClose={onClose}
        onApplyFilter={handleApplyFilter}
      />
      <Container maxW="container.xl" px={0}>
        <Grid
          templateColumns={{ base: "1fr", md: "320px 1fr" }}
          gap={{ base: 3, md: 10 }}
        >
          <Stack spacing={6}>
            <Breadcrumb spacing="8px">
              <BreadcrumbItem>
                <BreadcrumbLink href="/" color="grayscale.600">
                  {isLoading ? (
                    <SkeletonText noOfLines={1} width="50px" />
                  ) : (
                    "Beranda"
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#" color="grayscale.900">
                  {isLoading ? (
                    <SkeletonText noOfLines={1} width="70px" />
                  ) : (
                    "Produk"
                  )}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
            <Box display={{ base: "none", md: "block" }}>
              <FilterSidebar onApplyFilter={handleApplyFilter} />
            </Box>
          </Stack>

          <VStack
            display={{ base: "flex", md: "none" }}
            alignItems="flex-start"
            mb={3}
          >
            <Button
              leftIcon={<Icon as={SlidersHorizontal} />}
              variant="outline"
              size="md"
              onClick={onOpen}
            >
              Filter
            </Button>
          </VStack>

          <Box>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(3, 1fr)",
              }}
              gap={{ base: 3, md: 6 }}
            >
              {renderProductGrid()}
            </Grid>
          </Box>
        </Grid>
        {isLoading ? (
          <Skeleton height="40px" width="250px" mt={6} mx="auto" />
        ) : (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </Container>
    </Box>
  );
}
