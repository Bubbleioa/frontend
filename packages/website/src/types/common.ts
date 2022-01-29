// using camelcase api

// enum subjectType {
//   book = 1,
//   anime = 2,
//   music = 3,
//   game = 4,
//   reality = 6
// }

// enum personType {
//   individual,
//   company,
//   combination
// }

// enum bloodType {
//   A,
//   B,
//   CD,
//   O
// }

// enum characterType {
//   character,
//   body,
//   ship,
//   organization
// }

// enum collectionType {
//   want,
//   watched,
//   watching,
//   shelved,
//   abandon
// }

// enum epType {
//   original,
//   SP,
//   OP,
//   ED
// }

type infoBox = {
  key:string,
  value:string | {
    k?: string
    v:string
  }[]
}[]

type images = {
  large: string
  common: string
  medium: string
  small: string
  grid: string
}

type count = {
  '1': number
  '2': number
  '3': number
  '4': number
  '5': number
  '6': number
  '7': number
  '8': number
  '9': number
  '10': number
}

type rating = {
  rank: number
  total: number
  count: count
  score: number
}

type collection = {
  wish: number
  collect: number
  doing: number
  onHold: number
  dropped: number
}

type tag = {
  name: string
  count: number
}

export type CharacterDetail = {
  id: number
  name: string
  type: number
  images: {
    large: string
    medium: string
    small: string
    grid: string
  },
  summary: string
  locked: boolean
  infobox: infoBox
  gender: string
  bloodType: number
  birthYear: number
  birthMon: number
  birthDay: number
  stat: {
    comments: number
    collects: number
  }
}

export type Subject = {
  id: number
  name: string
  type: number
  nameCn: string
  summary: string
  nsfw: boolean
  locked: boolean
  date: string // YYYY-MM-DD format
  platform: string
  images: images
  infobox: infoBox
  volumes: number
  eps: number
  totalEpisodes: number
  rating: rating
  collection: collection
  tags: tag[]
}

export type PersonDetail = {
  id: number
  name: string
  type: number
  career: string
  images: images
  summary: string
  locked: boolean
  lastModified: string
  infobox: infoBox
  gender: string
  bloodType: number
  birthYear: number
  birthMon: number
  birthDay: number
  stat: {
    comments: number
    collects: number
  }
}
