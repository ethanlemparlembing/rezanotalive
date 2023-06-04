import Image from "next/image";
import { useMemo } from "react";

export default function Images({ images }) {
  const groupSize = 3;
  const numGroups = useMemo(
    () => Math.ceil(images?.length / groupSize),
    [images?.length]
  );

  const groups = useMemo(() => {
    const calculatedGroups = [];
    for (let i = 0; i < numGroups; i++) {
      calculatedGroups.push(images.slice(i * groupSize, (i + 1) * groupSize));
    }
    return calculatedGroups;
  }, [images, groupSize, numGroups]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {groups.map((group, index) => (
        <div className="grid gap-4" key={index}>
          {group.map(({ id, public_id, blurDataUrl }) => (
            <div
              key={id}
              className="h-auto max-w-full rounded-lg overflow-hidden"
            >
              <Image
                src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.jpg`}
                width={720}
                height={480}
                priority
                placeholder="blur"
                sizes="(max-width: 640px) 100vw,
                      (max-width: 1280px) 50vw,
                      (max-width: 1536px) 33vw,
                      25vw"
                alt="eek"
                blurDataURL={blurDataUrl}
                className="h-full w-full object-cover object-center transform brightness-90 transition will-change-auto hover:brightness-110"
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
