import { render, cleanup } from '@testing-library/svelte'
import App from '../App.svelte'

describe('App', () => {
  test('should render greeting', () => {
    const { container } = render(App, { props: { name: 'world' } })

    expect(container.querySelector('h1').innerHTML).toBe('Hello world!')
    expect(container.firstChild).toMatchSnapshot()
  })

})
