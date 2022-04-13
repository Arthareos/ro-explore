import { Coordinates } from './coordinates';

export interface Destination {
  id: string;
  name: string;
  coordinates: Coordinates;
  description: string;
}
