import { addressList } from "./addressList";

const getUprn = async (postcode: string, house: string, month: number, year: number): Promise<string> => {
  const addresses = await addressList(postcode, month, year)

  const address = addresses.find((a) => a.PropertyNameAndNumber === house)
  if (!address) {
    return ""
  }
  return address.UPRN
}

export { getUprn }
