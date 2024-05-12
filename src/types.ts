export type User = {
  name: string;
  email: string;
  role: string;
  user_id: number;
  exp: number;
};

export type StoreType = {
  authToken?: string;
  setAuthToken: (authToken?: string) => void;
  user?: User;
  setUser: (user: User) => void;
};

//posttype
export type PostBlockProps = {
  post: {
    createdDate: string;
    id: number;
    mediaType: string;
    mediaUrl: string;
    tags: string;
    text: string;
    title: string;
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
      college: string;
    };
    votes: number;
  };
};

export interface UserProfile {
  college: string;
  company: string;
  course: string;
  createdAt: Date | null;
  email: string;
  gender: string;
  id: number;
  name: string;
  phoneNo: string;
  username: string;
  uuid: string;
}

// TEXT TYPES

export type FontSize = 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40; // Adjust this list as needed

export type HeadingSize = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type SubheadingSize = "subheading1" | "subheading2" | "subheading3";

export type Style = {
  [key: string]: React.CSSProperties;
};

// YEAR TYPES
export type DropdownType = {
  key: string;
  value: string | number;
};

export type SelectType = {
  label: string;
  value: string | number;
};

export type Month =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";
