import * as S from "./Styled"
import alface from "../assets/alface.jpg"
import carrinho from "../assets/carrinho.png"
import laranja from "../assets/laranja.jpg"
import beterraba from "../assets/beterraba.jpg"
import cenoura from "../assets/cenoura.jpg"
import cereja from "../assets/cereja.jpg"
import limao from "../assets/limao.jpg"
import manga from "../assets/manga.jpg"
import tomate from "../assets/tomate.jpg"
import { useState } from "react"

export default function Main() {

    const [item, setItem] = useState(carrinho)
    const [numero, setNumero] = useState(null)

    const sub = () => {
        if(numero > 0){
            setNumero(numero - 1)
        }
    }
    
  return (
    <S.Main>
        <S.BoxOne>
            <S.H1>HORTIFRUTY<span>vnw</span></S.H1>
            <h2>Nossos Produtos</h2>
        </S.BoxOne>
          <S.Boxtwo>
            <S.BoxItem>
                <img onClick={()=>{setItem(alface)}} src={alface} alt="" />
                <img onClick={()=>{setItem(laranja)}} src={laranja} alt="" />
                <img onClick={()=>{setItem(cereja)}} src={cereja} alt="" />
                <img onClick={()=>{setItem(cenoura)}} src={cenoura} alt="" />
                <img onClick={()=>{setItem(manga)}} src={manga} alt="" />
                <img onClick={()=>{setItem(limao)}} src={limao} alt="" />
                <img onClick={()=>{setItem(beterraba)}} src={beterraba} alt="" />
                <img onClick={()=>{setItem(tomate)}} src={tomate} alt="" />
            </S.BoxItem>
            <S.Ancora>
                <S.Carrinho>
                <S.SecondCarrinho>
                    <img src={item} alt="carrinho de compras" />
                    <h3>Click no produto para colocar no carriho</h3>
                    <h4>{numero}</h4>
                </S.SecondCarrinho>
                <S.MaisEmenos>
                <button onClick={()=>{setNumero(numero + 1)}}>+</button>
                <button onClick={sub}>-</button>
                </S.MaisEmenos>
                </S.Carrinho>
            </S.Ancora>
        </S.Boxtwo>
    </S.Main>
  )
}
