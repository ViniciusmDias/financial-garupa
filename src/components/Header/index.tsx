import * as S from './styles'
import eclipseImg from '../../assets/eclipse.svg'
import hamburguerImg from '../../assets/hamburguer.svg'

export function Header() {
  return (
    <S.Container>
      <img src={eclipseImg} alt="eclipse" />
      <h2>Controle financeiro</h2>
      <button type="button">
        <img src={hamburguerImg} alt="hamburguer menu" />
      </button>
    </S.Container>
  )
}
