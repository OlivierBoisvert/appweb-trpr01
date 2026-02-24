export interface Grade {
  name: string;
  path: string;
}

export interface Gear {
  id: number;
  nom: string;
  description: string;
  prix: number;
  stock: number;
  categorie: Grade;
}
