import { render, cleanup } from '@testing-library/svelte'
import App from '../App.svelte'
import timetable from '../data.js'

describe('App', () => {
  test('should render greeting', () => {
    const { container } = render(App, { props: { timetable } })

    expect(container.firstChild).toMatchSnapshot()
  })
})
