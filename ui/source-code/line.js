import React, { Component } from 'react'
import styled from 'styled-components'
import { unit } from '../../blueframe/defaults'
import { Split } from '../../blueframe/layouts'

const LineWrapper = styled(Split)`
  .add-component-wrapper {
    position: relative;
  }

  .line-source {
    cursor: pointer;
    padding-left: ${unit}px;
    ${props => props.current ? 'background-color: white;' : ''}
  }

  :hover .left-space, :hover .line-source, :hover .right-space {
    border-bottom: 1px solid #cacaca;
  }

  .line-source:hover {
    background-color: #ebf1fb;
  }
`

const AddComponent = styled.span`
  position: absolute;
  cursor: pointer;
  font-size: 32px;
  line-height: 32px;
  bottom: -16px;
  left: 6px;
`

export default class Line extends Component {
  state = {
    hasHover: false
  }

  hoverOn = () => this.setState({ hasHover: true })
  hoverOff = () => this.setState({ hasHover: false })

  render () {
    const { children, ...rest } = this.props
    const addComponent = this.state.hasHover ? (
      <AddComponent>+</AddComponent>
    ) : null

    return (
      <LineWrapper onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff} {...rest}>
        <Split.Panel position='left' width='52px'>
          <Split>
            <Split.Panel position='left' width='20px' className='left-space' />
            <Split.Content className='add-component-wrapper'>
              {addComponent}
            </Split.Content>
          </Split>
        </Split.Panel>
        <Split.Content>
          <Split>
            <Split.Content className='line-source'>{children}</Split.Content>
            <Split.Panel position='right' width='24px' className='right-space' />
          </Split>
        </Split.Content>
      </LineWrapper>
    )
  }
}
