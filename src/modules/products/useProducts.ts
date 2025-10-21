import { useQuery } from "@tanstack/react-query";
import type {
  CategoryResponse,
  ProductsRequest,
  ProductsResponse,
} from "./ProductEntity";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

// Helper function to get the base URL for API calls
const getBaseUrl = () => {
  // Check if we're on the server side
  if (typeof window === 'undefined') {
    // Server-side: use the full URL with the configured base URL
    const baseUrl = publicRuntimeConfig?.baseUrl || 'http://localhost:3000';
    return `${baseUrl}/api/sheets`;
  }
  // Client-side: use relative URL
  return '/api/sheets';
};
export const fetchProducts = async ({
  product,
}: {
  product: ProductsRequest;
}): Promise<ProductsResponse> => {
  

  const params: Record<string, string> = {};
  if (product.path) params.path = product.path;
  if (product.action) params.action = product.action;
  if (product.page) params.page = product.page.toString();
  if (product.pageSize) params.pageSize = product.pageSize.toString();
  if (product.productCategory) {
    params.product_category = product.productCategory;
  } else {
    params.withImage = "true";
  }

  const queryString = new URLSearchParams(params).toString();
  const url = `${getBaseUrl()}?${queryString}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()

  return {
    data: data.data,
    page: data.page,
    pageSize: data.pageSize,
    totalPage: data.totalPage,
  };
};

export const useProducts = (product: ProductsRequest) => {
  return useQuery({
    queryKey: ["products", product],
    queryFn: () => fetchProducts({ product: product }),
  });
};

export const fetchProductById = async (
  productId: string
): Promise<ProductsResponse> => {
  const url = `${getBaseUrl()}?path=product_list&action=read&page=1&pageSize=2&product_id=${productId}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()

  return {
    data: data.data,
    page: data.page,
    pageSize: data.pageSize,
  };
};

export const useProductById = (productId: string) => {
  return useQuery({
    queryKey: ["product", productId],
    queryFn: () => fetchProductById(productId),
    enabled: !!productId,
  });
};

const fetchCategories = async (): Promise<CategoryResponse> => {
  const url = `${getBaseUrl()}?path=category&action=read`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const data = await response.json()

  return {
    data: data.data,
    page: data.page,
    pageSize: data.pageSize,
  };
};

export const useCategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });
};
