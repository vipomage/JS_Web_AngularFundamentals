export interface User {
  displayName: string;
  email: string;
  isAdmin: boolean;
  uid: string;
  disabled?: boolean;
}
