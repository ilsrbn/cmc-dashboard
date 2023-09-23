export interface IListing {
  id: number;
  url: string;
  title: string;
  liquidity: number;
  holders: number;
  price: number;
  subscriptions: number;
}

export interface IAnalytics {
  users: {
    active: number,
    total: number
  },
  subscriptions: number,
  listings: {
    data: IListing[],
    active: number,
    total: number
  }
}