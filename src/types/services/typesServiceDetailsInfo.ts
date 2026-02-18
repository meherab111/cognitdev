export interface IOffers {
  number: string;
  heading: string;
  description: string;
}

export interface IServiceDetailsInfo {
  serviceId: string;
  title: string;
  choices: string[];
  srcImg: string[];
  offers: IOffers[];
}