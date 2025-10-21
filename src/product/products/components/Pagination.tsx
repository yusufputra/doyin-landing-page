import { Button, Flex, IconButton } from "@chakra-ui/react";
import { CaretLeft } from "@phosphor-icons/react/dist/csr/CaretLeft";
import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  return (
    <Flex justify="center" align="center" gap={1.5} mt={8}>
      <IconButton
        aria-label="Previous page"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
      >
        <CaretLeft size={20} />
      </IconButton>

      {[...Array(totalPages)].map((_, i) => (
        <Button
          key={i + 1}
          variant={currentPage === i + 1 ? "solid" : "outline"}
          onClick={() => onPageChange(i + 1)}
          bg={currentPage === i + 1 ? "black" : undefined}
          color={currentPage === i + 1 ? "white" : undefined}
          _hover={{
            bg: currentPage === i + 1 ? "black" : "gray.100",
          }}
        >
          {i + 1}
        </Button>
      ))}

      <IconButton
        aria-label="Next page"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
      >
        <CaretRight size={20} />
      </IconButton>
    </Flex>
  );
}
