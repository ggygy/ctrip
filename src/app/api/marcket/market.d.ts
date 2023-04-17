export type marketData = {
  cityName: string
  cityImgUrl: string
  cityTem: {
    Lb: number
    Ub: number
  }
  hotels: {
    imgUrl: string
    skipUrl: string
    name: string
    startingPrice: number
  }[]
}