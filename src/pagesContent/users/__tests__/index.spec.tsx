import { render } from '@testing-library/react'
import React from 'react'

import { RenderUsers } from '../index'

describe('RenderUsers', () => {
  it('should render the content', () => {
    const { getByText } = render(<RenderUsers users={[]} />)

    expect(getByText(/users:/i)).toBeInTheDocument()
  })
})
