import { IHero } from "@/models/hero.interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
  data: string;
};

export default function List({ data }: Props) {
  const [marvelHeroes, setMarvelHeroes] = useState<IHero[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch(`/api/hero?heroname=${data}`);
        if (!res.ok) {
          throw new Error("Error fetching");
        }
        const marvelHeroResponse = await res.json();
        const marvelHeroesData: IHero[] = await marvelHeroResponse.data;
        const message =
          marvelHeroesData.length === 0 ? "Nenhum herói encontrado" : "";
        setMessage(message);
        setMarvelHeroes(marvelHeroesData);
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, [data]);

  return (
    <>
      {message && <p>{message}</p>}
      {
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {marvelHeroes.map((hero) => (
            <li key={hero.id} className="bg-white rounded-lg shadow-md">
              <div className="aspect-w-1 aspect-h-1">
                <Image
                  src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                  alt={hero.name}
                  width={250}
                  height={250}
                  className="object-cover w-full h-full"
                />
              </div>

              <div className="p-4">
                <Link
                  href={`/hero/${hero.id}`}
                  className="text-blue-500 hover:underline"
                >
                  {hero.name}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      }
    </>
  );
}
