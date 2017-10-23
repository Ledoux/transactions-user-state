import React from 'react'
import { withComputedProps } from 'transactions-interface-state'

export const ToursSection = WrappedComponent => withComputedProps({
  slides: ({ users }) => users && users.sort((a,b) => a.sortIndex - b.sortIndex)
})(WrappedComponent)
