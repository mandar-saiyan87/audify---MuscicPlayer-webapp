
import appico from './images/icon_round.png'
import { HiOutlineHome } from "react-icons/hi2";
import { LuSearch } from "react-icons/lu";

export const AppImages = {
  appico
}

export const Colors = {
  primary: 'rgb(44, 169, 96)',
  secondary: '#131314',
  tertiary: 'rgb(36, 36, 36)',
  quaternary: 'white',
  defaulttext: '#8392A7'

}

export const menubar = [
  {
    name: 'Home',
    route: '/home',
    ico: <HiOutlineHome size={22} />
  },
  {
    name: 'Search',
    route: '/search',
    ico: <LuSearch size={22} />
  },
]

export const tabs = [
  'All',
  'Genre',
  'Popular'
]

export const genres = [
  { title: 'Pop', value: 'POP' },
  { title: 'Hip-Hop', value: 'HIP_HOP_RAP' },
  { title: 'Dance', value: 'DANCE' },
  { title: 'Electronic', value: 'ELECTRONIC' },
  { title: 'Soul', value: 'SOUL_RNB' },
  { title: 'Alternative', value: 'ALTERNATIVE' },
  { title: 'Rock', value: 'ROCK' },
  { title: 'Latin', value: 'LATIN' },
  { title: 'Film', value: 'FILM_TV' },
  { title: 'Country', value: 'COUNTRY' },
  { title: 'Worldwide', value: 'WORLDWIDE' },
  { title: 'Reggae', value: 'REGGAE_DANCE_HALL' },
  { title: 'House', value: 'HOUSE' },
  { title: 'K-Pop', value: 'K_POP' },
];


