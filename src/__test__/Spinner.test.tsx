

import { render } from '@testing-library/react'
import { Spinner } from '../components/Spinner/Spinner'

describe('Spinner Component', () => {
  it('Should render correctly', () => {
    const Sinner = render(<Spinner />)
    expect(Sinner.container).toMatchSnapshot()
  })
})