import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
} from "@chakra-ui/react";
import FilterSidebar from "./FilterSidebar";

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilter: (value: string) => void;
}

export default function FilterDrawer({
  isOpen,
  onClose,
  onApplyFilter,
}: FilterDrawerProps) {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent>
        <Flex
          alignItems="center"
          justifyContent="space-between"
          p={"22px 20px"}
          borderBottomWidth={1}
          borderColor="#EDEDED"
        >
          <DrawerHeader p={0}>Filter</DrawerHeader>
          <DrawerCloseButton pos="relative" top={0} right={0} />
        </Flex>

        <DrawerBody p={0}>
          <FilterSidebar onApplyFilter={onApplyFilter} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
