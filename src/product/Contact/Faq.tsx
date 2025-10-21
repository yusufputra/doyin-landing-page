import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
} from "@chakra-ui/react";

export default function FAQSection() {
  const faqs = [
    {
      question: "Mengapa Menjadi Mitra Dongyin?",
      answer:
        "Menjadi mitra Dongyin berarti membuka peluang bisnis lebih luas. Kami menyediakan data, wawasan, dan teknologi untuk membantu memperluas pasar, meraih peluang, dan meningkatkan kinerja.",
    },
    {
      question: "Apa Saja Dukungan Pemasaran yang Tersedia?",
      answer:
        "Kami menyediakan materi promosi seperti katalog, brosur, iklan, spanduk online, video, dan lainnya. Nama Anda juga akan dipromosikan di situs internal/eksternal kami.",
    },
    {
      question: "Apakah Dongyin Memberikan Dukungan Penjualan?",
      answer:
        "Kami secara berkala menawarkan kebijakan dukungan harga bagi agen. Untuk detail lebih lanjut, hubungi tim penjualan kami.",
    },
    {
      question: "Produk Apa Saja yang Ditawarkan?",
      answer:
        "Dengan pengalaman lebih dari 30 tahun, kami terus mengembangkan portofolio produk yang inovatif untuk memenuhi permintaan pasar global.",
    },
    {
      question: "Seperti Apa Dukungan Teknis yang Diberikan?",
      answer:
        "Tim ahli kami siap memberikan solusi berkualitas tinggi dan membantu Anda memilih produk yang paling sesuai dengan kebutuhan proyek Anda.",
    },
  ];

  return (
    <Box py={{ base: 20, md: "100px" }} bg="white">
      <Container maxW="container.xl" px={{ base: 6, md: "140px" }}>
        <Stack spacing={{ base: 5, md: "28px" }}>
          <Stack textAlign="center" spacing={2}>
            <Heading
              fontSize={{ base: "32px", md: "40px" }}
              lineHeight={{ base: "38px", md: "48px" }}
              fontWeight="semibold"
              color="grayscale.900"
            >
              Pertanyaan Umum
            </Heading>
            <Text fontWeight="normal" color="grayscale.600" fontSize="md">
              Temukan jawaban cepat untuk pertanyaan umum seputar Dongyin.
            </Text>
          </Stack>

          <Accordion allowMultiple px={{ base: 0, md: "90px" }}>
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} borderTopWidth={0} borderBottomWidth={1}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton
                      p={6}
                      pb={isExpanded ? 0 : 6}
                      px={3}
                      bg="white"
                      borderRadius="lg"
                      _hover={{ bg: "gray.50" }}
                    >
                      <Box flex="1" textAlign="left" fontWeight="medium">
                        {faq.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel pb={6} px={3}>
                      {faq.answer}
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </Stack>
      </Container>
    </Box>
  );
}
