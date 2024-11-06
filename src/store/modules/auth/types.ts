export interface Profile {
  id: string;
  address: string;
  phone: string;
  imageUrl: string;
}

export interface AuthState {
  auth: {
    token?: string;
    profile?: Profile;
  };
}
