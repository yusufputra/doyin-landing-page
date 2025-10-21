import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import PurchaseFormModal from "@/product/Products/components/PurchaseFormModal";
import { useRouter } from "next/router";
import { useProductById } from "@/modules/products/useProducts";
import { Product } from "@/modules/products/ProductEntity";
import PurchaseFormModal from "./components/PurchaseFormModal";

type ShowcaseProps = {
  product?: Product;
  isLoading: boolean;
  isError: boolean;
};

export default function Showcase({
  product,
  isLoading,
  isError,
}: ShowcaseProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState(
    product?.images[0].image_url
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleThumbnailClick = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        },
      },
    ],
  };

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0].image_url);
    }
  }, [product]);

  return (
    <Box py={{ base: 10, lg: 8 }} bg="white">
      <Container maxW="container.xl" py={{ base: 0, lg: 8 }}>
        <Breadcrumb spacing="8px" mb={8}>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Beranda</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="/products">Produk</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Skeleton isLoaded={!isLoading}>
              <BreadcrumbLink href="#" color="gray.500">
                {product?.name || "Loading..."}
              </BreadcrumbLink>
            </Skeleton>
          </BreadcrumbItem>
        </Breadcrumb>

        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={{ base: 16, lg: 20 }}
        >
          <Box flex="1" maxW={{ base: "100%", lg: 549 }}>
            <Skeleton isLoaded={!isLoading} borderRadius="md">
              <Image
                src={selectedImage}
                alt={product?.name || "Product Image"}
                width="full"
                height="auto"
                objectFit="cover"
                transition="all 0.2s"
                mb={3}
                aspectRatio={549 / 436}
              />
            </Skeleton>

            <Box
              sx={{
                ".slick-slide": {
                  paddingX: "6px",
                },
                ".slick-track": {
                  mx: "-6px",
                },
              }}
            >
              <Slider {...sliderSettings}>
                {product?.images.map((image, index) => (
                  <Box key={index} p={1}>
                    <Skeleton isLoaded={!isLoading} borderRadius="md">
                      <Box
                        borderWidth="1px"
                        borderColor={
                          index === selectedIndex ? "teal.500" : "gray.200"
                        }
                        borderRadius="md"
                        cursor="pointer"
                        transition="all 0.2s"
                        _hover={{ borderColor: "teal.500" }}
                        onClick={() =>
                          handleThumbnailClick(image.image_url, index)
                        }
                        role="button"
                        aria-label={`View product image ${index + 1}`}
                      >
                        <Image
                          src={
                            image.image_url ||
                            "/images/product-detail-thumbnail.png"
                          }
                          alt={`Product thumbnail ${index + 1}`}
                          width={128}
                          height={100}
                          objectFit="cover"
                          borderRadius="md"
                        />
                      </Box>
                    </Skeleton>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Box>

          <Stack flex="1" spacing={{ base: 9, lg: 8 }} p={{ base: 0, lg: 8 }}>
            <Stack spacing={{ base: 4, lg: 4 }}>
              <Stack spacing={2}>
                <Skeleton isLoaded={!isLoading}>
                  <Text
                    fontSize={{ base: "xl", lg: "2xl" }}
                    fontWeight="semibold"
                  >
                    {product?.name || "Loading..."}
                  </Text>
                </Skeleton>
              </Stack>

              <Box>
                <Heading as="h2" fontSize="18px" fontWeight="medium" py={4}>
                  Tentang Produk
                </Heading>
                <SkeletonText isLoaded={!isLoading} noOfLines={6} spacing={4}>
                  <Text
                    fontSize={{ base: "sm", lg: "md" }}
                    color="gray.600"
                    whiteSpace="pre-line"
                  >
                    {product?.description || "No description available."}
                  </Text>
                </SkeletonText>
              </Box>
            </Stack>

            <Skeleton isLoaded={!isLoading}>
              <Button
                size="lg"
                colorScheme="teal"
                width="full"
                bg="primary.500"
                onClick={onOpen}
              >
                Beli Sekarang
              </Button>
            </Skeleton>
          </Stack>
        </Flex>
      </Container>
      <PurchaseFormModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
