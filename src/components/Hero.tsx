import React from "react";
import Container from "./Container";

const Hero = () => {
  return (
    <Container className="mt-9">
      <div className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
          ZALUZHA
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          <i>Where Stories Come Alive, and Ideas Take Flight</i>
        </p>
      </div>
    </Container>
  );
};

export default Hero;
