import * as S from './styles'
import eclipseImg from '../../assets/eclipse.svg'
import hamburguerImg from '../../assets/hamburguer.svg'
import closeImg from '../../assets/close.svg'
import { useState } from 'react'

export function Header() {
  const [isMenuActive, setIsMenuActive] = useState(false)

  return (
    <S.Container>
      <S.Content>
        <img src={eclipseImg} alt="eclipse" />
        <h2>Controle financeiro</h2>
        <button type="button" onClick={() => setIsMenuActive(true)}>
          <img src={hamburguerImg} alt="hamburguer menu" />
        </button>
        <S.Menu className={isMenuActive ? 'active' : ''}>
          <li>
            <button type="button" onClick={() => setIsMenuActive(false)}>
              <img src={closeImg} alt="close menu" />
            </button>
          </li>
          <li>
            <a href="#">Resumo</a>
          </li>
          <hr />
          <li>
            <a href="#">Dashboard</a>
          </li>
          <hr />
          <li>
            <a href="#">Configurações</a>
          </li>
        </S.Menu>
      </S.Content>
    </S.Container>
  )
}
