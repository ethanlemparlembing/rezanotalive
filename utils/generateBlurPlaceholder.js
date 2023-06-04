import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";

const cache = new Map();

export default async function getBase64ImageUrl(image) {
  if (cache.has(image)) {
    return cache.get(image);
  }

  const response = await fetch(
    `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_jpg,w_8,q_70/${image.public_id}.${image.format}`
  );
  const buffer = await response.arrayBuffer();

  const minified = await imagemin.buffer(Buffer.from(buffer), {
    plugins: [imageminJpegtran()],
  });

  const url = `data:image/jpeg;base64,${Buffer.from(minified).toString(
    "base64"
  )}`;
  cache.set(image, url);

  return url;
}
