import { ReactNode } from "react"

export type Root = Root2[]

export interface Root2 {
  name: Name
  tld: unknown[]
  cca2: string
  ccn3: string
  cca3: string
  cioc: string
  independent: boolean
  status: string
  unMember: boolean
  currencies: Currencies
  idd: Idd
  capital: string[]
  altSpellings: string[]
  region: string
  subregion: string
  languages: Languages
  translations: Translations
  latlng: number[]
  landlocked: boolean
  borders: unknown[]
  area: number
  demonyms: Demonyms
  flag: string
  maps: Maps
  population: number
  gini: Gini
  fifa: string
  car: Car
  timezones: string[]
  continents: string[]
  flags: Flags
  coatOfArms: CoatOfArms
  startOfWeek: string
  capitalInfo: CapitalInfo
  postalCode: PostalCode
}

export interface Name {
  common: string
  official: string
  nativeName: NativeName
}

export interface NativeName {
  eng: Eng
}

export interface Eng {
  official: string
  common: string
}

export interface Currencies {
  NGN: Ngn
}

export interface Ngn {
  name: string
  symbol: string
}

export interface Idd {
  root: string
  suffixes: string[]
}

export interface Languages {
  eng: string
}

export interface Translations {}

export interface Demonyms {}

export interface Maps {
  googleMaps: string
  openStreetMaps: string
}

export interface Gini {
  "2018": number
}

export interface Car {
  signs: string[]
  side: string
}

export interface Flags {
  png: string
  svg: string
  alt: string
}

export interface CoatOfArms {
  png: string
  svg: string
}

export interface CapitalInfo {
  latlng: number[]
}

export interface PostalCode {
  format: string
  regex: string
}


export interface ContentProp{
  icon?: ReactNode;
  text: string | number;
  link?: string;
}