export interface IRegion {
  id?: string;
  regionName?: string | null;
  regionDesc?: string | null;
}

export const defaultValue: Readonly<IRegion> = {};
