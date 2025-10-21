import type React from "react";
import { useRef, useState } from "react";
import { Box, Container, Flex, IconButton } from "@chakra-ui/react";
import { ArrowLeft } from "@phosphor-icons/react/dist/csr/ArrowLeft";
import { ArrowRight } from "@phosphor-icons/react/dist/csr/ArrowRight";
import type { Product } from "@/modules/products/ProductEntity";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "@/product/products/components/ProductCard";

interface ProductSliderProps {
  products: Product[];
}

function NextArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Next"
      onClick={onClick}
      position="absolute"
      right={{ base: 0, md: 20 }}
      top="42%"
      transform="translateY(-50%)"
      zIndex={2}
      rounded="full"
      bg="white"
      shadow="lg"
      _hover={{ bg: "gray.100" }}
      w="52px"
      h="52px"
    >
      <ArrowRight size={20} />
    </IconButton>
  );
}

function PrevArrow(props: any) {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Previous"
      onClick={onClick}
      position="absolute"
      left={{ base: 0, md: 5 }}
      top="42%"
      transform="translateY(-50%)"
      zIndex={2}
      rounded="full"
      bg="white"
      shadow="lg"
      _hover={{ bg: "gray.100" }}
      w="52px"
      h="52px"
    >
      <ArrowLeft size={20} />
    </IconButton>
  );
}

function CustomPaging({
  isActive,
  onClick,
}: {
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Flex w="full" h="full" justify="center" align="center">
      <Box
        w="12px"
        h="12px"
        borderRadius="full"
        bg={isActive ? "primary.900" : "grayscale.200"}
        onClick={onClick}
        transition="all 0.2s"
      />
    </Flex>
  );
}

export default function ProductSlider({ products }: ProductSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    customPaging: (i: number) => (
      <CustomPaging
        isActive={currentSlide === i}
        onClick={() => {
          if (sliderRef.current) {
            sliderRef.current.slickGoTo(i);
          }
        }}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <Box bottom={{ base: 0, sm: -20 }}>
        <Flex justify="center">{dots}</Flex>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxW="container.xl" p={0}>
      <Slider ref={sliderRef} {...settings}>
        {products.map((product, idx) => (
          <Box key={idx} px={3}>
            <ProductCard
              {...product}
              maxImageWidth="360px"
              maxImageHeight="420px"
              imageAspectRatio={360 / 420}
            />
          </Box>
        ))}
      </Slider>
    </Container>
  );
}
