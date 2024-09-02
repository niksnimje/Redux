import { GET_PRODUCT_FILED, GET_PRODUCT_REQ, GET_PRODUCT_SUCCES } from "../ActionType"

const initalstate = {
  isLoading: false,
  isError: false,
  data: []
}
export const reducer = (state = initalstate, action) => {
  switch (action.type) {
    case GET_PRODUCT_REQ:
      return { isLoading: true, isError: false, data: [] }
    case GET_PRODUCT_SUCCES:
      return { isLoading: false, isError: false, data: action.payload }
    case GET_PRODUCT_FILED:
      return { isLoading: false, isError: true, data: [] }
    default: state
  }
}