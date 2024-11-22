export interface Profile {
  id: string;
  address: string;
  phone: string;
  imageUrl: string;
}

export interface AuthState {
  auth: {
    id?: string;
    email?: string;
    username?: string;
    token?: string;
    profile?: Profile;
  };
}
