import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import { usePhotos } from "./usePhotos";
import { Counter } from "../components/Counter";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  const photos = usePhotos();

  return (
    <section id="photos">
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Photos</h1>
      <div className="mb-8">
        <Counter />
      </div>
      <ImageGrid columns={3} images={photos.mainPhotos} />
      <ImageGrid columns={2} images={photos.secondaryPhotos} />
      <ImageGrid columns={4} images={photos.tertiaryPhotos} />
    </section>
  );
}
