export interface Author {
  name: string
  avatar: string
  title: string
}

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  coverImage: string
  date: string
  readTime: string
  category: string
  tags: string[]
  author: Author
  relatedPosts?: RelatedPost[]
}

export interface RelatedPost {
  id: string
  slug: string
  title: string
  excerpt: string
  coverImage: string
  category: string
}
