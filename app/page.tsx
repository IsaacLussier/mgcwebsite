import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black -mt-24">

      {/*  Carousel at the Top */}
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <Image
              src="/other/mgc1.PNG"
              alt="Slide 1"
              width={1920}
              height={600}
              className="w-full h-[500px] md:h-[900px] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/other/mgc1.PNG"
              alt="Slide 2"
              width={1920}
              height={600}
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src="/carousel3.jpg"
              alt="Slide 3"
              width={1920}
              height={600}
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Main Content */}
      <header className="my-12 text-center">
        <h1 className="text-5xl font-bold">Multicultural Greek Council at WMU</h1>
        <p className="mt-2 text-lg text-gray-600">Unity Through Diversity</p>
      </header>

      <section className="text-center">
        <p className="text-xl mb-4">Discover our events, organizations, and impact on campus.</p>
        <a href="/community" className="inline-block bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700">
          Learn More
        </a>
      </section>
    </main>
  );
}