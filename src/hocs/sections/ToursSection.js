import { connect } from 'react-redux'
import { compose } from 'redux'
import { withComputedProps } from 'transactions-redux-react'

export const ToursSection = compose(
  connect(({ setup: { context: { IS_DEVELOPMENT } } }) => ({ IS_DEVELOPMENT })),
  withComputedProps({
    slides: ({ users }) => users && users.sort((a,b) => a.sortIndex - b.sortIndex)
  })
)
