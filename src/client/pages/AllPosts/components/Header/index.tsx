import React from 'react'
import Article from '../Article'
import BoxedContainer from '../../../../app/components/Container/BoxedContainer'

class Header extends React.Component {
  render() {
    return (
      <BoxedContainer>
        <Article title="Lorem ipsum" />
      </BoxedContainer>
    )
  }
}
export default Header
