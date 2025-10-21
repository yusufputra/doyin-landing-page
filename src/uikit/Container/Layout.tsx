import { Box } from "@chakra-ui/react";
import Footer from "./Footer";
import Navbar, { ColorScheme } from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
  navbarColorScheme?: ColorScheme;
  navbarBgColor?: string;
};

export default function Layout({
  children,
  navbarColorScheme,
  navbarBgColor,
}: LayoutProps) {
  return (
    <Box minHeight="100vh" display="flex" flexDirection="column">
      <Navbar colorScheme={navbarColorScheme} bgColor={navbarBgColor} />
      <Box
        justifyContent="center"
        flex="1"
        bg="grayscale.50"
        mt={{ base: "70px", md: 20 }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
