import React, { StatelessComponent } from 'react'

import Headline from '../../../../app/components/Headline'
import Subheadline from '../../../../app/components/Subheadline'

import css from './index.scss'
import Review from './Review'
import BoxedContainer from '../../../../app/components/Container/BoxedContainer'

type Props = {}
const Reviews: StatelessComponent<Props> = props => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  return (
    <BoxedContainer classNameInner={css.container}>
      <Headline center={true}>Reviews</Headline>
      <Subheadline center={true}>Das Sagen Meine Freunde</Subheadline>
      <div className={css.reviews}>
        <Review
          key={1}
          description="Philipp ist ein großartiger Frontend-Entwickler. Seine Arbeit ist schnell, präzise und zielgerichtet. Bei Problemen steht er direkt zur Konfliktlösung bereit."
          stars={5}
          author="Roland Lakmann"
          authorRole="Nischenseiten Betreiber"
        />
        <Review
          key={2}
          description="Sehr vertrauenswürdiger, professioneller Consultant mit Top Beratung, ein sehr raffiniertes Köpfchen. Freue mich sehr auf unsere zukünftige Zusammenarbeit."
          stars={5}
          author="Leon Bayan"
          authorRole="Wirtschaftsinformatiker"
        />
        <Review
          key={3}
          description="Philipp is a great front-end and back-end developer, and he learns stuff really really fast. Amazing sense of culture and ideal for a full-stack position."
          stars={5}
          author="Gabriel Tomitsuka"
          authorRole="Software Engineer"
        />
      </div>
    </BoxedContainer>
  )
}

export default Reviews
