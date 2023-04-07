// [{"movieId":1,"category":"Comedy","title":"Ace Ventura: Pet Detective","director":"Tom Shadyac","year":1994,"rating":"PG-13","edited":"","lentTo":"","notes":"?"},

export type Movie = {
  movieID: number;
  category: string;
  title: string;
  director: string;
  year: number;
  rating: string;
  edited: string;
  lentTo: string;
  notes: string;
};
