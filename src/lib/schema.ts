import type { Author } from '@/types/author'
import type { Frontmatter, Site } from '@/types/site'

const authorSchema = (author: Author) => ({
  '@type': 'Person',
  name: author.name,
  url: author.url,
})

const offerSchema = () => ({
  '@type': 'Offer',
  availability: 'https://schema.org/InStock',
  priceCurrency: 'EUR',
  price: '0',
})

const potentialSchema = (url: string) => ({
  '@type': 'PlayAction',
  target: {
    '@type': 'EntryPoint',
    urlTemplate: url,
  },
})

export const siteSchema = (author: Author, frontmatter: Frontmatter, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: site.name,
  url: site.url,
  description: frontmatter.description,
  author: authorSchema(author),
  inLanguage: site.locale,
})

export const gameSchema = (author: Author, site: Site) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoGame',
  name: site.name,
  url: site.url,
  description: site.description,
  genre: site.genre,
  gamePlatform: ['Web Browser', 'Desktop', 'Mobile'],
  playMode: 'SinglePlayer',
  author: authorSchema(author),
  offers: offerSchema(),
  potentialAction: potentialSchema(site.url),
})
