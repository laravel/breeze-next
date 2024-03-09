export type ResponseError = {
  response: {
    status: number;
    data: {
      errors?: { [key: string]: string[] };
    };
  };
}

export type SetErrors = (errors: { [key: string]: string[] }) => void;

export type SetStatus = {
  (status: string | null): void;
}

export type User = {
    id: number
    name: string
    email: string
    email_verified_at?: string
    created_at: string
    updated_at: string
}

export type DropdownProps = {
    align?: 'left' | 'top' | 'right';
    width?: number | string;
    contentClasses?: string;
    trigger: React.ReactNode;
    children: React.ReactNode;
}

export type NavLinkProps = {
    active?: boolean;
    href: string;
    [key: string]: any;
}
