import Image from "next/image";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
        
        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
          BrainX
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
          Controla tus videojuegos favoritos mediante la mente.
          BrainX, te ayuda a jugar a tus videojuegos.
        </p>
        

       
      </div>
      <div className="lg:w-full">
        <Image
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Hero;
