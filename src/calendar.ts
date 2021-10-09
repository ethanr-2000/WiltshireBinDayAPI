import axios from "axios"

interface CollectionListPostRequest {
  postcode: string
  uprn: string
  month: number
  year: number
}

const calendar = async (postcode: string, uprn: string, month: number, year: number): Promise<string> => {
  const CollectionListUrl = "https://ilforms.wiltshire.gov.uk/WasteCollectionDays/CollectionList"

  const postBody: CollectionListPostRequest = {
    postcode,
    uprn,
    month,
    year
  }

  const response = await axios.post(CollectionListUrl, postBody)
  // @ts-ignore
  return response.data
}

export { calendar }
