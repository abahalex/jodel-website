import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ children, ...props }: IconProps) {
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{children}</svg>;
}

export function ArrowRight(props: IconProps) { return <Icon {...props}><path d="M5 12h14m-7-7 7 7-7 7" /></Icon>; }
export function ArrowUpRight(props: IconProps) { return <Icon {...props}><path d="M6 18 18 6M8 6h10v10" /></Icon>; }
export function Sparkle(props: IconProps) { return <Icon {...props}><path d="m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6L12 2Z" /></Icon>; }
export function Check(props: IconProps) { return <Icon {...props}><path d="m5 12 4 4L19 6" /></Icon>; }
export function Pin(props: IconProps) { return <Icon {...props}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></Icon>; }
export function Calendar(props: IconProps) { return <Icon {...props}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/></Icon>; }
export function Shield(props: IconProps) { return <Icon {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></Icon>; }
export function Clock(props: IconProps) { return <Icon {...props}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></Icon>; }
export function Menu(props: IconProps) { return <Icon {...props}><path d="M4 7h16M4 12h16M4 17h16" /></Icon>; }
export function Mail(props: IconProps) { return <Icon {...props}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></Icon>; }
export function Phone(props: IconProps) { return <Icon {...props}><path d="M8 3h3l1.5 5-2 2a15 15 0 0 0 4.5 4.5l2-2L22 14v3a4 4 0 0 1-4 4A15 15 0 0 1 3 6a3 3 0 0 1 5-3Z"/></Icon>; }
