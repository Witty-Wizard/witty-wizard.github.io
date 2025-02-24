import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import Head from "next/head";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { WorkHistory } from "@/components/WorkHistory";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Work History | Electronics Engineer</title>
        <meta name="description" content="An electronics engineer passionate about designing and developing innovative products that impact millions of lives." />
      </Head>

      <Container>
        <span className="text-4xl">💼</span>
        <Heading className="font-black">Work History</Heading>
        <Paragraph className="max-w-xl mt-4">
          I&apos;m an electronics engineer passionate about <Highlight>designing and developing</Highlight> innovative products that can impact millions of lives.
        </Paragraph>
        <WorkHistory />
      </Container>
    </>
  );
}
