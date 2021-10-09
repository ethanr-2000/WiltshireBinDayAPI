# [WiltshireBinDayAPI](https://github.com/ethanr-2000/WiltshireBinDayAPI)

<h4 align="center">Provides a Typescript abstraction to the Wiltshire Council Bin Day Website</h4>

[![npm version](https://badge.fury.io/js/wiltshire-bin-day-api.svg)](https://badge.fury.io/js/wiltshire-bin-day-api)

## Install with npm

`npm install wiltshire-bin-day-api`

##Basic Implementation
The main function in this repo is the `getBinDays` function, which returns a list of bin day information for the current month for the given address.
```
const { getBinDays } = require('wiltshire-bin-day-api')

const binDays = await getBinDays(<POSTCODE>, <HOUSE NAME/NUMBER>)

console.log(binDays)
```
Returns a list of objects of the `binDay` type:
```
[{
    date: 2021-10-07T00:00:00.000Z,
    binType: 'Household waste'
},
{
    date: 2021-10-14T00:00:00.000Z,
    binType: 'Mixed dry recycling (blue lidded bin) and glass (black box or basket)
},
... etc
]
```

If the UPRN is known ([find here](https://uprn.uk/)), it can be passed to save an extra HTTP call

`const binDays = await getBinDays(<POSTCODE>, <HOUSE NAME/NUMBER>, <UPRN>)`

The function defaults to the current month/year. If you'd like bin data for another month, these can be passed. The months are numbered with January as `1`

`const binDays = await getBinDays(<POSTCODE>, <HOUSE NAME/NUMBER>, <UPRN>, <MONTH>, <YEAR>)`

##Lower-Level Implementation

The api-level functions are also exposed and used as shown below.

####AddressList
Get list of details for all available house names/numbers in the given postcode. 
```
const { addressList } = require('wiltshire-bin-day-api')

const addresses = await addressList(<POSTCODE>, <MONTH>, <YEAR>)
```

####Calendar
Get HTML string of calendar with bin day details embedded
```
const { calendar } = require('wiltshire-bin-day-api')

const binCalendarHtml = await calendar(<POSTCODE>, <UPRN>, <MONTH>, <YEAR>)
```

Can be automatically parsed with `binDayHtmlParser` to get `binDay` objects
`const binDays = binDayHTMLParser(binCalendarHtml)`




## Contribute

Feel free to open a pull request! The repo was quickly made for a project.

## License

MIT

---

> Medium [@ethanr2000](https://ethanr2000.medium.com/) &nbsp;&middot;&nbsp;
> GitHub [@ethanr-2000](https://github.com/ethanr-2000) &nbsp;&middot;&nbsp;
> LinkedIn [@ethanroberts2000](https://www.linkedin.com/in/ethanroberts2000/)

