import DesignConfiguration from "./DesignConfiguration";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface PageProps {
  searchParams: Record<string, string | string[] | undefined>;
}

export default async function Page({ searchParams }: PageProps) {
  const id = searchParams["id"];

  if (!id || typeof id !== "string") return notFound();

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) return notFound();

  const { imgUrl, width, height, id: configId } = configuration;

  return (
    <DesignConfiguration
      imgUrl={imgUrl}
      imageDimensions={{ width, height }}
      configId={configId}
    />
  );
}
