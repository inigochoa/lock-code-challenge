export interface Frontmatter {
  title: string
  description: string
  schemas?: string[]
}

export interface Site {
  description: string
  genre: string[]
  lang: string
  locale: string
  name: string
  repository: string
  title: string
  url: string
}
