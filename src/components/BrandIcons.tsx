import type { ReactElement } from "react";

type IconProps = { size?: number; className?: string };

export function GitHubIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.48.11-3.08 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.79.12 3.08.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM2.9 9.75h4.16V21H2.9V9.75Zm6.7 0h3.99v1.54h.06c.55-1.05 1.9-2.16 3.92-2.16 4.19 0 4.96 2.75 4.96 6.33V21h-4.15v-5.03c0-1.2-.02-2.75-1.68-2.75-1.68 0-1.94 1.31-1.94 2.66V21H9.6V9.75Z" />
    </svg>
  );
}

export function FacebookIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.59-1.56h1.7V3.14C16.5 3.05 15.5 3 14.33 3c-2.42 0-4.08 1.48-4.08 4.2v2.4H7.5v3.2h2.75V21h3.25Z" />
    </svg>
  );
}

export function WebsiteIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </svg>
  );
}

export function CodeIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m8 8-4 4 4 4m8-8 4 4-4 4m-3-10-2 12" />
    </svg>
  );
}

export function MailIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

export function XIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M17.53 3h3.02l-6.6 7.55L21.75 21h-5.9l-4.62-6.04L5.94 21H2.91l7.06-8.07L2.25 3h6.05l4.18 5.52L17.53 3Zm-1.06 16.2h1.67L7.6 4.7H5.8l10.67 14.5Z" />
    </svg>
  );
}

export function DribbbleIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0Zm7.93 5.53a10.2 10.2 0 0 1 2.31 6.3c-.33-.07-3.62-.73-6.95-.31-.08-.16-.16-.32-.24-.48-.21-.43-.44-.85-.68-1.26 3.68-1.5 5.38-3.93 5.56-4.25ZM12 1.76c2.55 0 4.89.95 6.67 2.51-.15.3-1.68 3.37-5.05 4.68A45.5 45.5 0 0 0 10.1 2.6 10.3 10.3 0 0 1 12 1.76ZM8.36 3.44a58 58 0 0 1 3.45 6.29c-4.35 1.17-8.18 1.15-8.6 1.15A10.3 10.3 0 0 1 8.36 3.44ZM1.75 12.02v-.27c.4.01 4.96.06 9.6-1.4.26.44.5.9.73 1.35-.13.04-.26.08-.39.13-4.04 1.32-6.19 4.96-6.37 5.31A10.2 10.2 0 0 1 1.75 12.02Zm10.25 10.22c-2.06 0-3.95-.67-5.34-1.8.14-.33 1.76-3.9 6.32-5.42.06-.02.11-.03.17-.05.72 1.86 1.24 3.79 1.4 4.91-1.05.24-2.14.36-3.28.36h-.27Zm4.44-1.31c-.1-.76-.51-2.26-1.15-4.2 3.06-.49 5.75.31 6.08.44a10.22 10.22 0 0 1-4.93 3.76Z" />
    </svg>
  );
}

export const brandIcons: Record<string, (p: IconProps) => ReactElement> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  facebook: FacebookIcon,
  globe: WebsiteIcon,
  code: CodeIcon,
  mail: MailIcon,
  twitter: XIcon,
  dribbble: DribbbleIcon,
};
