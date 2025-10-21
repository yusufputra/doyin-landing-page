import { CategoryResponse } from "@/modules/products/ProductEntity";
import { useCategories } from "@/modules/products/useProducts";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  Skeleton,
  SkeletonText,
  useDisclosure,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { CaretDown } from "@phosphor-icons/react/dist/csr/CaretDown";
import { List } from "@phosphor-icons/react/dist/csr/List";
import { X } from "@phosphor-icons/react/dist/csr/X";
import Image from "next/image";

export type ColorScheme = "white" | "teal";

type NavbarProps = {
  bgColor?: string;
  colorScheme?: ColorScheme;
  categoryData?: CategoryResponse;
  isLoading?: boolean;
};

const NavbarMobile = ({
  colorScheme,
  bgColor,
  categoryData,
  isLoading,
}: NavbarProps) => {
  const { isOpen, onToggle } = useDisclosure();
  const textColor = colorScheme === "white" ? "grayscale.900" : "white";
  return (
    <VStack
      bg={
        bgColor
          ? bgColor
          : colorScheme === "white"
            ? "grayscale.50"
            : "primary.500"
      }
      spacing={0}
      boxShadow="md"
      color={textColor}
    >
      <Flex w="100%" px={5} py={3} justify="space-between" wrap="wrap">
        <Flex align="center" flexShrink={0}>
          <Link href="/">
            <Image
              width={142}
              height={46}
              src="/images/dongyin-logo.png"
              alt="dongyin logo"
            />
          </Link>
        </Flex>

        <HStack align="center" spacing={3}>
          <Link href="/contact">
            <Button
              variant="outline"
              size="sm"
              colorScheme="teal"
              color={colorScheme === "teal" ? "white" : "teal"}
              _focus={{
                color: "teal",
              }}
            >
              Hubungi Kami
            </Button>
          </Link>
          <Box onClick={onToggle}>
            {isOpen ? (
              <X size={24} color={colorScheme === "teal" ? "white" : "black"} />
            ) : (
              <List
                size={24}
                color={colorScheme === "teal" ? "white" : "black"}
              />
            )}
          </Box>
        </HStack>
      </Flex>

      <Collapse
        in={isOpen}
        animateOpacity
        style={{ width: "100%", boxShadow: "lg", color: "white" }}
      >
        <VStack
          align="stretch"
          spacing={4}
          p="12px 20px"
          boxShadow={"md"}
          color={textColor}
        >
          <Link href="/" _hover={{ color: "primary.500" }}>
            <Text fontSize="lg">Beranda</Text>
          </Link>

          <Divider />

          <Link href="/about-us" _hover={{ color: "primary.500" }}>
            <Text fontSize="lg">Tentang Kami</Text>
          </Link>

          <Divider />

          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton
                px={0}
                _hover={{ bg: "transparent", color: "primary.500" }}
              >
                <Box flex="1" textAlign="left">
                  <Text fontSize="lg">Produk</Text>
                </Box>
                <CaretDown />
              </AccordionButton>
              <AccordionPanel pb={4} px={0}>
                <VStack align="stretch" spacing={3}>
                  {isLoading ? (
                    <SkeletonText mt="4" noOfLines={4} spacing="4" />
                  ) : (
                    categoryData?.data.map((category) => (
                      <Link
                        key={category.name}
                        href={`/products?category=${category.name}`}
                      >
                        <Text>{category.name}</Text>
                      </Link>
                    ))
                  )}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Collapse>
    </VStack>
  );
};

const NavbarDesktop = ({
  colorScheme,
  bgColor,
  categoryData,
  isLoading,
}: NavbarProps) => {
  const textColor = colorScheme === "white" ? "grayscale.900" : "white";
  return (
    <Flex
      bg={
        bgColor
          ? bgColor
          : colorScheme === "white"
            ? "grayscale.50"
            : "primary.500"
      }
      color={textColor}
      borderBottomWidth={{ base: 1, md: 0 }}
      borderColor="gray.200"
      justifyContent="center"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" wrap="wrap" padding={4}>
          <Flex gap={10} align="center" flexShrink={0}>
            <Link href="/">
              <Image
                width={148}
                height={48}
                src={
                  colorScheme === "white"
                    ? "/images/dongyin-logo.png"
                    : "/images/dongyin-logo-primary-color.png"
                }
                alt="dongyin logo"
              />
            </Link>

            <Stack
              direction={{ base: "column", md: "row" }}
              display={{ base: "none", md: "flex" }}
              gap={8}
              align="center"
              flexGrow={1}
            >
              <Link href="/" fontWeight="medium">
                Beranda
              </Link>
              <Link href="/about-us" fontWeight="medium">
                Tentang Kami
              </Link>

              <Menu>
                <MenuButton
                  as={Button}
                  variant="link"
                  fontWeight="medium"
                  color={textColor}
                  _active={{
                    color: textColor,
                  }}
                >
                  Produk
                </MenuButton>
                <MenuList color="grayscale.900">
                  {isLoading ? (
                    <Skeleton height="20px" my="4" />
                  ) : (
                    categoryData?.data.map((category) => (
                      <Link
                        key={category.name}
                        href={`/products?category=${category.name}`}
                      >
                        <MenuItem>{category.name}</MenuItem>
                      </Link>
                    ))
                  )}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>

          <Flex align="center">
            {colorScheme === "teal" ? (
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="md"
                  p="0.5rem 1rem"
                  color={colorScheme === "teal" ? "white" : "primary.500"}
                  _hover={{
                    bg: "teal",
                    color: "white",
                  }}
                >
                  Hubungi Kami
                </Button>
              </Link>
            ) : (
              <Link href="/contact">
                <Button
                  variant="solid"
                  size="md"
                  p="0.5rem 1rem"
                  colorScheme="teal"
                >
                  Hubungi Kami
                </Button>
              </Link>
            )}
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default function Navbar({
  colorScheme = "white",
  bgColor,
}: NavbarProps) {
  const [gtMd] = useMediaQuery("(min-width: 48em)");
  const { data: categories, isLoading } = useCategories();

  return (
    <Box position="fixed" top={0} zIndex={1000} width="100%" boxShadow="md">
      {gtMd ? (
        <NavbarDesktop
          colorScheme={colorScheme}
          bgColor={bgColor}
          categoryData={categories}
          isLoading={isLoading}
        />
      ) : (
        <NavbarMobile
          colorScheme={colorScheme}
          bgColor={bgColor}
          categoryData={categories}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
}
