import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Import button from shadcn/ui

// Set up the image URL builder
const builder = imageUrlBuilder(client);

function urlForImage(source: any) {
  return builder.image(source).url();
}

interface Iblog {
  post_title: string;
  post_description: string;
  image: any; // Sanity asset reference for images
}

export default async function Home() {
  // Fetch data from Sanity
  const res: Iblog[] = await client.fetch('*[_type == "post"]');

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {res.map((data, index) => (
          <div key={index} className="bg-white shadow-md rounded-md p-4">
            {/* Title */}
            <h2 className="text-lg font-semibold mb-2">{data.post_title}</h2>
            
            {/* Image */}
            <div className="relative w-full h-48 mb-4">
              {data.image && (
                <Image
                  src={urlForImage(data.image)}
                  alt={data.post_title || "Blog Image"}
                  layout="fill"
                  className="object-cover rounded-md"
                />
              )}
            </div>
            
            {/* Description */}
            <p className="text-gray-600 mb-4">{data.post_description}</p>

            {/* Button */}
            <Button className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white">
              Read More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
