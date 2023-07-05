import { NextRequest, NextResponse } from "next/server";

const endUrl = process.env.MARVEL_DETAIL_HERO_END;
const url = process.env.MARVEL_DETAIL_HERO;

export async function GET(request: NextRequest, context: {params: {id: string}}) {
  const id = context.params.id;
  const res = await fetch(`${url}${id}${endUrl}`);
  
  if(!res.ok) throw new Error('Erro no server(detail)');

  try {    
    const data = await res.json();
    
    const marvelHeroesData = data.data.results;
    const message = marvelHeroesData.length === 0 ? 'Nenhum herói encontrado' : '';
    return NextResponse.json({ data: marvelHeroesData, message });

  }catch(err){
    return NextResponse.json({err})
  } 
}  
