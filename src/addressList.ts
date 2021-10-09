import axios from "axios"

interface AddressListPostRequest {
  postcode: string
  uprn: string
  month: number
  year: number
}

interface Address {
  PropertyNameAndNumber: string
  Postcode: string
  UPRN: string
}

interface Model {
  PostcodeAddresses: Address[]
}

interface AddressListPostResponse {
  Model: Model
  IsSuccess: boolean
  Message: string
}

const addressList = async (postcode: string, month: number, year: number): Promise<Address[]> => {
  const addressListUrl = "https://ilforms.wiltshire.gov.uk/WasteCollectionDays/AddressList"

  const postBody: AddressListPostRequest = {
    postcode,
    uprn: "",
    month,
    year
  }

  const response = await axios.post(addressListUrl, postBody)
  // @ts-ignore
  const responseData: AddressListPostResponse = response.data

  return responseData.Model.PostcodeAddresses
}

export { addressList }
