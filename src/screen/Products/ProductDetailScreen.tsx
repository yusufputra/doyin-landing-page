import {
  fetchProductById,
  useProductById,
  useProducts,
} from "@/modules/products/useProducts";
import Contact from "@/product/Home/Contact";
import ProductRecommendations from "@/product/products/ProductRecommendation";
import Showcase from "@/product/products/Showcase";
import Layout from "@/uikit/Container/Layout";
import { generateMetadataUtils } from "@/utils/metadata";
import type { Metadata } from "next";
import getConfig from "next/config";
import { useRouter } from "next/router";

const { publicRuntimeConfig } = getConfig();

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const product = await fetchProductById(params.id);
  return generateMetadataUtils({
    title: `${product.data[0].name} | Dongyin`,
    description: product.data[0].description,
    url: `${publicRuntimeConfig.baseUrl}/products/${params.id}`,
    image: product.data[0].images[0].image_url,
    type: "product",
  });
}

export default function ProductDetailScreen() {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, isError } = useProductById(id as string);
  const { data: productsData, isLoading: productsLoading } = useProducts({
    action: "read",
    page: 1,
    pageSize: 10,
    path: "product_list",
  });

  const filteredData = productsData?.data.filter(
    (product) => product.id !== data?.data[0].id
  );

  return (
    <Layout>
      <Showcase
        product={data?.data[0]}
        isLoading={isLoading}
        isError={isError}
      />
      <ProductRecommendations
        products={filteredData}
        isLoading={productsLoading}
      />
      <Contact />
    </Layout>
  );
}
