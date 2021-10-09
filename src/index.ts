import { getUprn } from "./uprn";
import { calendar } from "./calendar";
import { binDayHTMLParser } from "./binDayHtmlParser";
import { binDay } from "./binDayHtmlParser";
import { addressList } from "./addressList";

const getBinDays = async (postcode: string, house: string, uprn="", month=-1, year=-1): Promise<binDay[]> => {
  if (month === -1) { month = new Date().getMonth() + 1 }
  if (year === -1) { year = new Date().getFullYear() }
  if (!uprn) {
    uprn = await getUprn(postcode, house, month, year)
  }

  const binCalendarHtml: string = await calendar(postcode, uprn, month, year)
  const binDays = binDayHTMLParser(binCalendarHtml)

  if (binDays) {
    return binDays
  }
  throw Error("Something went wrong")
}

export {
  getBinDays,
  addressList,
  calendar,
  binDayHTMLParser
}

