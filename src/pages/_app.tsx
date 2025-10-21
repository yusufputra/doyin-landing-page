import { theme } from "@/config/theme";
import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const enableIndexingSEO = publicRuntimeConfig.enableIndexingSeo;

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo
          title="Dongyin"
          description="Temukan pilihan pompa air yang dirancang untuk berbagai keperluan: irigasi pertanian, kebutuhan rumah tangga, hingga penggunaan komersial berskala besar."
          dangerouslySetAllPagesToNoIndex={!enableIndexingSEO}
          dangerouslySetAllPagesToNoFollow={!enableIndexingSEO}
          canonical={publicRuntimeConfig.baseUrl}
        />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
