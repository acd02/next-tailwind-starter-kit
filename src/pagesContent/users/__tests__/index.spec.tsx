import { render, screen } from 'rtl'

import { RenderUsers } from '../'

describe('RenderUsers', () => {
  it('should render the content', () => {
    render(<RenderUsers users={[]} />)

    expect(screen.getByText(/users:/i)).toBeInTheDocument()
  })
})
