import { NextRequest, NextResponse } from "next/server";

const url = process.env.MARVEL_URL
const endUrl = process.env.MARVEL_URL_END;
const allHero = process.env.ALL_HERO || '';  

export async function GET(request: NextRequest) {
  let res, heroname;
  const {searchParams} = new URL(request.url);
  heroname = searchParams.get('heroname');
  
  if(heroname) res = await fetch(`${url}${heroname}${endUrl}`);    
  else res = await fetch(allHero);

  if(!res.ok) throw new Error('Erro no server');

  try {    
    const data = await res.json();
    const marvelHeroesData = data.data.results;
    const message = marvelHeroesData.length === 0 ? 'Nenhum herói encontrado' : '';
    return NextResponse.json({ data: marvelHeroesData, message });

  }catch(err){
    return NextResponse.json({err})
  } 
}  
