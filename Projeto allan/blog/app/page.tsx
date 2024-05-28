"use client";
import Link from "next/link";
import Image from "next/image";
import { BsBookmarkHeart } from "react-icons/bs";
import { AiOutlineContacts, AiOutlineFileExclamation } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import VLibras from "vlibras-nextjs";
// import VLibras from "@djpfs/react-vlibras";

import { SwitchThemeButton } from "@/components/switchThemeButton";

interface IRecipe {
  imgPath: string;
  title: string;
  ingredients: string[];
  rating: number;
}

const recipes: IRecipe[] = [
  {
    imgPath: "/bolinho-de-mandioca-com-carne-seca-capa.webp",
    title: "BATATA TEMPERADA",
    ingredients: [
      "3 batatas descascadas cortadas em pedaços",
      "Sal a gosto",
      "Alecrim fresco a gosto",
      "Orégano a gosto",
      "Azeite de oliva a gosto",
    ],
    rating: 9,
  },
  {
    imgPath: "/bolovo-simples.jpeg",
    title: "Bolovo simples",
    ingredients: [
      "6 ovos inteiros",
      "1 pacote de creme de cebola",
      "500 gramas de carne moída",
      "1/2 xícara de chá de farinha de trigo",
      "1 xícara de chá de farinha de rosca",
      "2 ovos batidos",
      "1 pitada de sal",
    ],
    rating: 7,
  },
  {
    imgPath: "/ovos-de-codorna-temperados.jpeg",
    title: "OVOS DE CODORNA TEMPERADOS",
    ingredients: [
      "1 caixinha de ovos de codorna (30 unidades)",
      "1 colher de chá de sal (ou a gosto)",
      "1 colher de chá de orégano (ou a gosto)",
      "1 colher de chá de pimenta calabresa (ou a gosto)",
      "1 colher de sobremesa de alho frito (ou a gosto)",
      "2 colheres de sopa de azeite",
      "Suco de 1/2 limão",
      "1 colher de sobremesa de coentro ou salsinha",
    ],
    rating: 10,
  },
  {
    imgPath: "/bolinho-de-mandioca-com-carne-seca-capa.webp",
    title: "BATATA TEMPERADA",
    ingredients: [
      "3 batatas descascadas cortadas em pedaços",
      "Sal a gosto",
      "Alecrim fresco a gosto",
      "Orégano a gosto",
      "Azeite de oliva a gosto",
    ],
    rating: 7,
  },
];

export default function Home() {
  return (
    <main className="bg-background font-foreground">
      <header>
        <nav className="bg-primary flex flex-wrap lg:flex-nowrap justify-between justify-items-center p-2  md:p-1">
          {/* logo */}
          <div className="w-full md:w-auto flex justify-center " tabIndex={1}>
            <Image
              src="/LOGO.png"
              width={100}
              height={100}
              alt="logo da empresa grabriel receitas"
              className="md:h-[9vh] md:w-[7.5vw]"
            />
          </div>

          <div className="flex text-center text-[0.8rem] md:text-lg justify-center w-full md:w-auto gap-2  ">
            <Link
              href="#"
              className="grid grid-flow-col items-center transition-all duration-700 hover:text-red-500 gap-1"
              tabIndex={2}
            >
              LISTA DE RECEITAS <BsBookmarkHeart className="" />
            </Link>
            <Link
              href="#"
              className="grid grid-flow-col items-center transition-all duration-700 hover:text-red-500 gap-1"
              tabIndex={3}
            >
              CONTATO <AiOutlineContacts className="" />
            </Link>
            <Link
              href="#"
              className="grid grid-flow-col items-center transition-all duration-700 hover:text-red-500 gap-1"
              tabIndex={4}
            >
              SOBRE <AiOutlineFileExclamation className="" />
            </Link>
            <SwitchThemeButton />
          </div>
        </nav>
      </header>
      <section className="grid place-content-center text-center m-2 lg:mx-4 font-bold">
        <h1 tabIndex={6}>GABRIEL RECEITAS</h1>
        <h2 tabIndex={7}> MELHORES RECEITAS DE BOTECO</h2>
        <article>
          {recipes.map((recipe, index: number) => (
            <div
              key={index}
              className="bg-card  rounded-lg h-[50vh] w-[95vw] mt-5 p-3 lg:h-[63vh] lg:w-[85vw] lg:p-4"
              tabIndex={8 + index * 5}
            >
              <h1 tabIndex={8 + index * 5}>
                {recipe.title.toLocaleUpperCase()}
              </h1>
              <div className="grid grid-cols-2 lg:grid-clos-1">
                <div>
                  <img
                    src={recipe.imgPath}
                    alt={recipe.title + "imagem"}
                    className="rounded-lg my-3 h-[50%] w-[90%] lg:w-[80%] lg:h-[60%]"
                    tabIndex={9 + index * 5}
                  />
                  <span>{recipe.rating}/10</span>
                </div>
                <div className="h-[60vh] lg:mr-4">
                  <h1>Ingredientes</h1>
                  <ul className="text-start font-normal h-[40%] lg:h-[50%] lg:text-lg overflow-y-scroll scroll-smooth">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i}>* {ingredient}.</li>
                    ))}
                  </ul>
                  <Button className="w-full mt-3 transition-all duration-500 hover:bg-red-800">
                    VER MAIS
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </article>
      </section>
      <VLibras forceOnload />
    </main>
  );
}
