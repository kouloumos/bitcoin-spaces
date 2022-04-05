import { UserV2 } from "../Users";

export declare type TSpaceV2State = "live" | "scheduled" | "ended";

export interface SpaceV2 {
  _id: string;
  state: TSpaceV2State;
  created_at?: string;
  host_ids: UserV2[];
  lang?: string;
  is_ticketed?: boolean;
  invited_user_ids?: string[];
  scheduled_start?: string;
  speaker_ids?: UserV2[];
  started_at?: string;
  title?: string;
  updated_at?: string;
  // extra types
  participants_stats?: number[];
}

export interface Spaces {
  count: number;
  spaces: SpaceV2[];
  updateAt: number; // unix time
}