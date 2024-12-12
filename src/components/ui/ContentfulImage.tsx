import Image from "next/image";

interface ContentfulLoaderProps {
  src: string;
  width: number;
  quality?: number; // Make quality optional
}

const contentfulLoader = ({ src, width, quality }: ContentfulLoaderProps) => {
  const qualityParam = quality !== undefined ? `&q=${quality}` : "&q=75"; // Handle quality parameter properly
  return `${src}?w=${width}${qualityParam}`;
};

const ContentfulImage = (props: ContentfulLoaderProps) => {
  return <Image alt="" loader={contentfulLoader} {...props} />;
};

export default ContentfulImage;
