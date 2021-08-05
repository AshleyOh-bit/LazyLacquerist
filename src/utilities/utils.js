export const checkForErr = (response) => {
  if(response.status >= 500) {
    return "Our servers are currently down. Please try again."
  } else if (!response.ok) {
    return 'Something went wrong. Please try again later.'
  } else {
    return response.json()
  }
}