export interface CommunitiesInterface {
  id: string;
  homnamees: string;
  imgUrl: string;
  group: string;
}

export interface HomesInterface {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
}
