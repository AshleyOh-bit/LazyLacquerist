import { checkForErr } from "./utils"

const baseURL = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type="

export const apiCall = (endPoint) => {
  return fetch(`${baseURL}${endPoint}`)
  .then(response => checkForErr(response))
}