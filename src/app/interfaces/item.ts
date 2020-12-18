export interface Item {
  _id: number;
  name: string;
  description?: string;
  created_at: Date;
  productFeatures?: {
    [key: string]: string;
  };
}

export interface ItemCreate {
  _id?: number;
  name: string;
  description?: string;
  created_at?: Date;
  productFeatures?: {
    [key: string]: string;
  };
}
