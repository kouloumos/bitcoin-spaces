export type UserState = "host" | "speaker";

export interface UserV2 {
  _id: string;
  name: string;
  username: string;
  profile_image_url?: string;
  hosted?: string[];
  speaked?: string[];
}