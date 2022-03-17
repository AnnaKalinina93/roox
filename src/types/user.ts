export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {
      lat: string,
      lng: string,
    },
  },
  phone: string,
  website: string,
  company: {
    name: string,
    catchPhrase: string,
    bs: string,
  },
}

export type UserPost = {
  name: string,
  username: string,
  email: string,
  street: string,
  city: string,
  zipcode: string,
  phone: string,
  website: string,
  comment: string,
}