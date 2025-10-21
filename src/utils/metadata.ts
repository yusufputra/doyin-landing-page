type MetadataProps = {
  title?: string;
  description?: string;
  url: string;
  image?: string;
  type?: "website" | "article" | "product";
};

export function generateMetadataUtils({
  title = "Dongyin",
  description = "Temukan pilihan pompa air yang dirancang untuk berbagai keperluan: irigasi pertanian, kebutuhan rumah tangga, hingga penggunaan komersial berskala besar.",
  url,
  image = "/images/dongyin-logo.png",
  type = "website",
}: MetadataProps) {
  return {
    title,
    description,
    openGraph: {
      type,
      url,
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
