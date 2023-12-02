import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-10 my-2 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-16 h-full">
      <div className="flex-1">
        <h1 className="text-left py-2 text-4xl font-bold md:text-5xl lg:text-7xl text-white text-transparent bg-clip-text">
          Better design for your digital products.
        </h1>
        <p className="mt-2 text-white md:mt-4 text-md md:text-lg">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button title="See Our Works" url="/portfolio" />
      </div>
      <div className="flex-1">
        <Image
          src="/hero.png"
          height={400}
          width={400}
          priority
          alt="hero"
          className="object-contain w-full max-h-[500px] animate-pulse"
        />
      </div>
    </main>
  );
}
