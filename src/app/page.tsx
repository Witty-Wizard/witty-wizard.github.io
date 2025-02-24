import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import PaperViewer from "@/components/PaperViewer";
import Image from "next/image";

export default function Home() {
  const experience = new Date().getFullYear() - 2021; // Dynamically calculates years of experience

  return (
    <Container>
      <span className="text-4xl">👋</span>
      <Heading className="font-black">Hello there! I&apos;m Shashank Agarwal</Heading>
      <Paragraph className="max-w-xl mt-4">
        I&apos;m an <Highlight>electronics engineer</Highlight> passionate about designing and developing innovative products that impact millions of lives.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        I have <Highlight>{experience} years of experience</Highlight> working on power electronics, embedded systems.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        What I&apos;ve been working on
      </Heading>
      <Products />
    </Container>
  );
}
