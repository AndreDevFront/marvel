"use client";

import { IHero } from "@/models/hero.interface";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [marvelHeroes, setMarvelHeroes] = useState<IHero[]>([]);
  const [message, setMessage] = useState<string>("");
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const findHero = async () => {
      try {
        const res = await fetch(`/api/hero/${id}`);

        if (!res.ok) throw new Error("Heroi não encontrado");
        const marvelHeroResponse = await res.json();
        const marvelHeroesData: IHero[] = await marvelHeroResponse.data;
        const message =
          marvelHeroesData.length === 0 ? "Nenhum herói encontrado" : "";
        setMessage(message);
        setMarvelHeroes(marvelHeroesData);
        setIsLoaded(true);
      } catch (error) {
        console.error(error);
      }
    };

    findHero();
  }, [id]);

  function handleVoltar() {
    router.back();
  }

  return (
    <>
      <section className="w-11/12  mx-auto my-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 justify-center items-center">
        {isLoaded && (
          <button
            onClick={handleVoltar}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-20 mb-4 mt-4"
          >
            Voltar
          </button>
        )}
        {message && <p>{message}</p>}
        {
          <ul className="">
            {marvelHeroes.map((hero) => (
              <li
                key={hero.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col md:flex-row"
              >
                <div className="md:w-3/5">
                  <h1 className="text-xl font-bold mb-2">{hero.name}</h1>
                  {hero.description ? (
                    <h2 className="text-lg text-gray-500 font-medium mt-2">
                      {hero.description}
                    </h2>
                  ) : (
                    <p className="text-gray-500 mt-2">
                      Personagem sem descrição
                    </p>
                  )}
                </div>
                <div className="aspect-w-1 aspect-h-1 md:w-2/5 md:mr-4">
                  <Image
                    src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                    alt={hero.name}
                    className="object-cover w-full h-full"
                    width={250}
                    height={250}
                  />
                </div>
              </li>
            ))}
          </ul>
        }
      </section>
    </>
  );
}
