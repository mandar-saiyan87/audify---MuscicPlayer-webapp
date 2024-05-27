
import appico from './images/icon_round.png'
import { HiOutlineHome } from "react-icons/hi2";
import { GiSoundOn } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { BsSoundwave } from "react-icons/bs";

export const AppImages = {
  appico
}

export const Colors = {
  primary: 'rgb(44, 169, 96)',
  secondary: '#373A40',
  tertiary: 'white'
}

export const menubar = [
  {
    name: 'Discover',
    route: '/discover',
    ico: <HiOutlineHome size={22}/>
  },
  {
    name: 'Around You',
    route: '/aroundyou',
    ico: <GiSoundOn size={22} />
  },
  {
    name: 'Top Artists',
    route: '/topartist',
    ico: <IoIosPeople size={22} />
  },
  {
    name: 'Top Charts',
    route: '/topcharts',
    ico: <BsSoundwave size={22} />
  }
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


