import { app } from 'hyperapp'
import { main, h1, div, button } from '@hyperapp/html'

app({
  state: {
    count: 0,
  },
  actions: {
    reset: () => ({ count: 0 }),
    add: state => ({ count: state.count + 1 }),
    sub: state => ({ count: state.count - 1 }),
  },
  view: (state, actions) =>
    main([
      h1(state.count),
      div([
        button({ onclick: actions.sub }, 'Sub'),
        button({ onclick: actions.reset }, 'Reset'),
        button({ onclick: actions.add }, 'Add'),
      ]),
    ]),
})
