import { useCategories } from "@/modules/products/useProducts";
import {
  Box,
  Button,
  Divider,
  Radio,
  RadioGroup,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type FilterSidebarProps = {
  onApplyFilter: (value: string) => void;
};

export default function FilterSidebar({ onApplyFilter }: FilterSidebarProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const { data: categories, isLoading, isError } = useCategories();

  if (isLoading) {
    return (
      <Stack
        p={6}
        pb={12}
        spacing={6}
        borderWidth={1}
        borderColor="#EDEDED"
        borderRadius="md"
      >
        <Skeleton height="20px" width="100px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />

        <Divider borderColor="grayscale.300" />

        <Skeleton height="20px" width="150px" />
        <Stack spacing={3}>
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} height="20px" />
          ))}
        </Stack>

        <Divider borderColor="grayscale.300" />

        <Skeleton height="40px" />
      </Stack>
    );
  }

  if (isError) {
    return <Text color="red.500">Error loading categories</Text>;
  }

  return (
    <Stack
      p={6}
      pb={12}
      spacing={6}
      borderWidth={{ base: 0, md: 1 }}
      borderColor="#EDEDED"
      borderRadius="md"
    >
      <Box>
        <Text fontWeight="semibold" fontSize="lg" mb={4}>
          Kategori
        </Text>
        <RadioGroup value={selectedCategory} onChange={setSelectedCategory}>
          <Stack spacing={3}>
            {categories?.data.map((category, index) => (
              <Radio key={`${category.name}-${index}`} value={category.name}>
                {category.name}
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
      </Box>

      <Divider borderColor="grayscale.300" />

      <Button
        bg="primary.500"
        colorScheme="teal"
        size="lg"
        onClick={() => onApplyFilter(selectedCategory)}
        w="full"
      >
        Terapkan Filter
      </Button>
    </Stack>
  );
}
