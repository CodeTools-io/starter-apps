import React from 'react'
import {{blueprintInstance}} from './{{blueprintInstance}}'

describe('{{blueprintInstance}}', () => {
  test('can render', () => {
    const { container } = renderComponent(
      <{{blueprintInstance}}>
        <p>Content for the {{blueprintInstance}}</p>
      </{{blueprintInstance}}>
    )

    expect(container).toMatchSnapshot()
  })
})

