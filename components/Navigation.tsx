'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // хук от NextJS
// по нему мы можем сранивать активное текущее положение

type NavLink = {
  label: string;
  href: string;
};
type Props = {
  // propsom принимаем navLinks
  navLinks: NavLink[];
};

function Navigation({ navLinks }: Props) {
  // console.log(navLinks);
  const pathname = usePathname();
  //console.log(pathname);
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.label}
            href={link.href}
            className={isActive ? 'active' : ''}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}

export default Navigation;
