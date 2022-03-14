import {
  SearchIcon,
  PhotographIcon,
  PlayIcon,
  NewspaperIcon,
} from '@heroicons/react/outline'

// Data for the nav menu in Header Component

const navData = [
  { url: '/all', Icon: SearchIcon, title: 'All', name: 'all' },
  { url: '/images', Icon: PhotographIcon, title: 'Images', name: 'images' },
  { url: '/videos', Icon: PlayIcon, title: 'Videos', name: 'videos' },
  { url: '/news', Icon: NewspaperIcon, title: 'News', name: 'news' },
]

// Data for social items components

export const socialItems = [
  { url: 'https://facebook.com/', title: 'Facebook' },
  { url: 'https://twitter.com/Marlon_Morales0', title: 'Twitter' },
  { url: 'https://instagram.com/', title: 'Instagram' },
  { url: 'https://youtube.com', title: 'YouTube' },
  { url: 'https://linkedin.com/', title: 'LinkedIn' },
  { url: 'https://github.com/', title: 'GitHub' },
  { url: 'https://discord.com/', title: 'Discord' },
  { url: 'https://pinterest.com/', title: 'Pinterest' },
]

export default navData
