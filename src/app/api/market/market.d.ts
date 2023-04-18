export type marketData = {
  cityName: string
  cityImgUrl: string
  cityTem: {
    Lb: number
    Ub: number
  }
  hotels: {
    hotelImgUrl: string
    hotelSkipUrl: string
    hotelName: string
    hotelStartingPrice: number
  }[]
}