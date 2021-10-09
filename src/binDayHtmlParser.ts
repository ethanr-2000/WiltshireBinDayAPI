const regexDateMatch = /(?<=data-original-datetext=")[\w \d,]+(?=")/g
const regexBinType = /(?<=data-original-title=")[\w ,()]+(?=")/g

export interface binDay {
  date: Date
  binType: string
}

const binDayHTMLParser = (html: string): binDay[] | null => {
  const dateMatches = [...html.matchAll(regexDateMatch)]
  const binTypeMatches = [...html.matchAll(regexBinType)]

  if (dateMatches.length === 0 || binTypeMatches.length === 0) {
    return null
  }

  const dates = dateMatches.map((d) => new Date(d[0]))
  const binTypes = binTypeMatches.map((b) => b[0])

  return dates.map((date, index) => ({date: date, binType: binTypes[index]}))
}

export { binDayHTMLParser }
