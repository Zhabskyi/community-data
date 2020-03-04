import { homeAveragePrice } from './helpers';

const state = {
  communities: [
    {
      "id": "1",
      "name": "Bowness",
      "imgUrl": "https://s3-ca-central-1.amazonaws.com/cdnarchitect/2017/11/24105657/bowness-park-rehabilitation.jpg",
      "group": "North West"
    },
    {
      "id": "2",
      "name": "Varsity",
      "imgUrl": "https://www.bwalk.com/media/4883/varsitysq1-rimyreehal2017-16.jpg?anchor=center&mode=crop&width=768&height=350&rnd=132114728500000000",
      "group": "North West"
    }
  ],
  homes: [
    {
      "id": "cf39c3f3-182b-4471-a7cb-1ba27526dcfe",
      "communityId": "1",
      "price": 400000.00,
      "area": 950,
      "type": "House"
  },
  {
      "id": "20244d9f-8147-4633-9b29-4c0ec5a762a9",
      "communityId": "2",
      "price": 600000.00,
      "area": 920,
      "type": "House"
  },
  {
      "id": "5f499fad-20bc-467e-9c00-dd7b3bd96a97",
      "communityId": "1",
      "price": 300000.00,
      "area": 879,
      "type": "Townhome"
  },
  {
      "id": "a6dffafd-8ab3-4662-9345-c213101f708e",
      "communityId": "1",
      "price": 500000.00,
      "area": 1103,
      "type": "House"
  }
  ],
  loading: true,
  error: ''
}

test("homeAveragePrice returns a Number", () => {
  const result = homeAveragePrice(state, "1");
  expect(typeof result).toBe('number');
});


test("homeAveragePrice returns 1200000 if id=1", () => {
  const result = homeAveragePrice(state, "1");
  expect(result).toEqual(1200000);
});

test("homeAveragePrice returns 600000 if id=2", () => {
  const result = homeAveragePrice(state, "2");
  expect(result).toEqual(600000);
})

test("homeAveragePrice returns 0 if id=3", () => {
  const result = homeAveragePrice(state, "3");
  expect(result).toEqual(0);
})