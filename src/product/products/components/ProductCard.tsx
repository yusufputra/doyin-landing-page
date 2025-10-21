import type { Product } from "@/modules/products/ProductEntity";
import { Box, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";

type ProductCardProps = Product & {
  imageAspectRatio?: number;
  maxImageWidth?: string;
  maxImageHeight?: string;
};

export default function ProductCard({
  id,
  name,
  description,
  images,
  imageAspectRatio = 286 / 296,
  maxImageWidth,
  maxImageHeight,
}: ProductCardProps) {
  return (
    <Link href={`/products/${id}`} _hover={{ textDecoration: "none" }}>
      <Box bg="white" borderRadius="md" transition="all 0.2s">
        <Stack spacing={4}>
          <Box
            bg="gray.50"
            borderRadius="md"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxWidth={maxImageWidth}
          >
            {images && images.length > 0 ? (
              <Image
                src={images[0].image_url || "/placeholder.svg"}
                alt={name}
                objectFit="cover"
                aspectRatio={imageAspectRatio}
                maxHeight={maxImageHeight}
              />
            ) : (
              <Box w={maxImageWidth} h={maxImageHeight || "296px"} />
            )}
          </Box>

          <Stack spacing={2}>
            <Heading size="md" fontWeight="semibold">
              {name}
            </Heading>

            <Text fontWeight="semibold" fontSize="lg" noOfLines={2}>
              {description}
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Link>
  );
}
