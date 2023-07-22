import { AdvertisementInterface } from 'interfaces/advertisement';
import { GameInterface } from 'interfaces/game';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  advertisement?: AdvertisementInterface[];
  game?: GameInterface[];
  user?: UserInterface;
  _count?: {
    advertisement?: number;
    game?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
