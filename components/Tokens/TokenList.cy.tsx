import React from 'react'
import TokenList from './TokenList'

describe('<TokenList />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TokenList />)
  })
})