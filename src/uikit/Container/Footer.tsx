import { useCategories } from "@/modules/products/useProducts";
import {
  Box,
  Flex,
  Text,
  Link,
  Stack,
  IconButton,
  SkeletonText,
} from "@chakra-ui/react";
import { FacebookLogo } from "@phosphor-icons/react/dist/csr/FacebookLogo";
import { LinkedinLogo } from "@phosphor-icons/react/dist/csr/LinkedinLogo";
import { YoutubeLogo } from "@phosphor-icons/react/dist/csr/YoutubeLogo";
import Image from "next/image";

export default function Footer() {
  const { data: categories, isLoading, isError } = useCategories();
  const displayedCategories = categories?.data.slice(0, 5) || [];
  const hasMoreCategories = categories && categories?.data.length > 5;
  return (
    <Box bg="gray.900" color="gray.300" py={10} px={6}>
      <Flex
        justify="space-between"
        flexWrap="wrap"
        maxW="1200px"
        mx="auto"
        mb={8}
        flexDir={{ base: "column", md: "row" }}
      >
        <Box mb={4} flex="1">
          <Image
            width={160}
            height={52}
            src="/images/dongyin-logo.png"
            alt="dongyin logo"
          />
        </Box>

        <Flex
          flex="3"
          justify="space-between"
          wrap="wrap"
          flexDir={{ base: "column", md: "row" }}
        >
          <Stack gap={2} mb={4}>
            <Text fontWeight="bold" mb={2} color="white">
              Produk Kami
            </Text>
            {isLoading ? (
              <SkeletonText noOfLines={3} spacing="2" />
            ) : (
              <>
                {displayedCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={`/products?category=${category.name}`}
                  >
                    {category.name}
                  </Link>
                ))}
                {hasMoreCategories && <Link href="/products">More</Link>}
              </>
            )}
          </Stack>
          <Stack gap={2} mb={4}>
            <Text fontWeight="bold" mb={2} color="white">
              Tentang Kami
            </Text>
            <Link href="/about-us#company-profile">Profil Perusahaan</Link>
            <Link href="/about-us#company-excellence">Keunggulan</Link>
            <Link href="/about-us#company-strategy">Strategi Globalisasi</Link>
          </Stack>
          <Stack gap={2} mb={4}>
            <Text fontWeight="bold" mb={2} color="white">
              Ikuti Kami
            </Text>
            <Flex gap={2}>
              <Link href="#">
                <IconButton
                  aria-label="LinkedIn"
                  colorScheme="gray"
                  bg="gray.700"
                  _hover={{ bg: "teal.400", color: "white" }}
                >
                  <LinkedinLogo color="white" />
                </IconButton>
              </Link>
              <Link href="#">
                <IconButton
                  aria-label="Facebook"
                  colorScheme="gray"
                  bg="gray.700"
                  _hover={{ bg: "teal.400", color: "white" }}
                >
                  <FacebookLogo color="white" />
                </IconButton>
              </Link>
              <Link href="#">
                <IconButton
                  aria-label="YouTube"
                  colorScheme="gray"
                  bg="gray.700"
                  _hover={{ bg: "#835BF1", color: "white" }}
                >
                  <YoutubeLogo color="white" />
                </IconButton>
              </Link>
            </Flex>
          </Stack>
        </Flex>
      </Flex>

      <Flex
        justify="space-between"
        flexWrap="wrap"
        maxW="1200px"
        mx="auto"
        borderTop="1px solid"
        borderColor="gray.700"
        pt={4}
      >
        <Text>© 2024 Dongyin</Text>
        <Stack direction="row" gap={4}>
          <Link href="#">Kebijakan Privasi</Link>
          <Link href="#">Ketentuan Layanan</Link>
          <Link href="#">Pengaturan Cookie</Link>
        </Stack>
      </Flex>
    </Box>
  );
}
