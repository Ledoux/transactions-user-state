export function getReturnState (props) {
  let returnTo
  let returnMessage
  const search = window.location.search
  returnTo = props.returnTo || (search.match(/returnTo=([^&]*)/) || [null, null])[1]
  returnMessage = (search.match(/returnMessage=([^&]*)/) || [null, null])[1]
  if (returnMessage) {
    returnMessage = decodeURIComponent(returnMessage)
  }
  return { returnTo,
    returnMessage
  }
}
