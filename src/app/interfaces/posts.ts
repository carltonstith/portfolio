export interface Posts {
  author: string;
  jetpack_featured_media_url: string;
  link: string;
  //excerpt: string;
  date: string;
  title: Title;
  excerpt: Excerpt;
  // title: string;
  // rendered: string;
}

export interface Title {
  rendered: string;
}

export interface Excerpt {
  rendered: string;
}
