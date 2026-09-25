import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ name, children, ...props }: IconProps & { name: string }) {
  return (
    <svg
      data-icon={name}
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Icon name="arrow-right" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </Icon>
);

export const ArrowUpRight = (p: IconProps) => (
  <Icon name="arrow-up-right" {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Icon>
);

export const ArrowUp = (p: IconProps) => (
  <Icon name="arrow-up" {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </Icon>
);

export const Download = (p: IconProps) => (
  <Icon name="download" {...p}>
    <path d="M12 4v11M7 10l5 5 5-5M5 20h14" />
  </Icon>
);

export const Sun = (p: IconProps) => (
  <Icon name="sun" {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
  </Icon>
);

export const Moon = (p: IconProps) => (
  <Icon name="moon" {...p}>
    <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z" />
  </Icon>
);

export const Menu = (p: IconProps) => (
  <Icon name="menu" {...p}>
    <path d="M4 8h16M4 16h16" />
  </Icon>
);

export const Close = (p: IconProps) => (
  <Icon name="close" {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Icon>
);

export const Trophy = (p: IconProps) => (
  <Icon name="trophy" {...p}>
    <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" />
    <path d="M16 6h3v1.5A3.5 3.5 0 0 1 15.6 11M8 6H5v1.5A3.5 3.5 0 0 0 8.4 11M12 13v4M8.5 20h7M10 17h4l.5 3h-5l.5-3Z" />
  </Icon>
);

export const Check = (p: IconProps) => (
  <Icon name="check" {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </Icon>
);

export const Spark = (p: IconProps) => (
  <Icon name="spark" {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.5 2.5M15.2 15.2l2.5 2.5M6.3 17.7l2.5-2.5M15.2 8.8l2.5-2.5" />
  </Icon>
);

export const Database = (p: IconProps) => (
  <Icon name="database" {...p}>
    <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
    <path d="M5 5.5v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-6M5 11.5v6c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5v-6" />
  </Icon>
);

export const Devices = (p: IconProps) => (
  <Icon name="devices" {...p}>
    <rect x="2.5" y="4" width="14" height="10" rx="1.5" />
    <path d="M6 18h7M9.5 14v4" />
    <rect x="17.5" y="9" width="4" height="10" rx="1" />
  </Icon>
);

export const Compass = (p: IconProps) => (
  <Icon name="compass" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </Icon>
);

export const Lock = (p: IconProps) => (
  <Icon name="lock" {...p}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M8 11V8a4 4 0 1 1 8 0v3" />
  </Icon>
);

export const LinkedIn = (p: IconProps) => (
  <svg
    data-icon="linkedin"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
    {...p}
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);
