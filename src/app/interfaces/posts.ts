export interface Posts {
  author: string;
  jetpack_featured_media_url: string;
  link: string;
  date: string;
  title: Title;
  excerpt: Excerpt;
}

export interface Title {
  rendered: string;
}

export interface Excerpt {
  rendered: string;
}
