import Container from "@/components/Container";
import React from "react";
import portraitImage from "@/img/portrait2.jpg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt="image"
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            ABOUT US
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-white">
            <p>Welcome to ZALUZHA—where passion meets purpose.</p>
          </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Blog History
            </h1>
            <p>
              Zaluzha began as a simple idea: to create a space where ideas
              could thrive, stories could inspire, and knowledge could empower.
              Since our inception in 2012, we’ve grown from humble beginnings
              into a vibrant community of readers and thinkers. Over the years,
              we’ve tackled diverse topics, shared countless insights, and
              connected with people around the globe.
            </p>
            <p>
              What started as a personal passion project has evolved into a
              platform that informs, inspires, and engages. We are proud to
              continue this journey with you, our valued readers.
            </p>
          </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Meet the Team
            </h1>
            <p>
              Our content is brought to life by a team of dedicated creators who
              share a love for storytelling and discovery.
            </p>
            <h1 className="text-1xl font-bold tracking-tight text-zinc-100 sm:text-2xl dark:text-zinc-100">
              Zaky
            </h1>
            <i>Founder</i>
            <p>
              “With a background in journalism and a passion for travel, Zaky is
              dedicated to uncovering untold stories and delivering meaningful
              insights.”
            </p>
            <h1 className="text-1xl font-bold tracking-tight text-zinc-100 sm:text-2xl dark:text-zinc-100">
              Luthfan
            </h1>
            <i> 3D Designer</i>
            <p>
              With a keen eye for detail and a passion for bringing ideas to
              life, Luthfan specializes in creating stunning 3D visualizations
              that blend art and innovation.
            </p>
          </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Our Mission & Vision
            </h1>

            <h2 className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              At Zaluzha, we believe in the power of words to transform lives.
              Our mission is:
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Inform: Share accurate, relevant, and engaging content.</li>
              <li>Inspire: Spark curiosity and motivate positive change.</li>
              <li>Connect: Build a community of like-minded individuals.</li>
            </ul>
            <p>
              Our vision is a world where ideas flow freely, conversations spark
              growth, and every voice finds its platform.
            </p>
            <p>
              Above all, we are committed to upholding values of authenticity,
              creativity, and inclusivity in everything we do.
            </p>
          </div>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
              Lets Connect!
            </h1>
            <h2 className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              We’d love to hear from you! Whether you have feedback, questions,
              or collaboration ideas, feel free to reach out.
            </h2>
            <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
              <li>Email: zaluzha@gmail.com</li>
              <li>Phone: 081310802395</li>
            </ul>
            <p>
              Thank you for being a part of our journey. Here’s to exploring,
              learning, and growing together!
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutPage;
