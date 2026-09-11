'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { headerConfig } from '@/config/header';
import { routes } from '@/config/navigation';
import { ArrowIcon } from '@/components/icons';

function Logo() {
  const [firstName, lastName] = headerConfig.logoText.split(' ');

  return (
    <span className="flex flex-col text-[14px] xl:text-[19px] font-normal uppercase leading-[1.1] tracking-normal text-brand-dark xl:text-brand-teal">
      <span>{firstName}</span>
      <span>{lastName}</span>
    </span>
  );
}

function BurgerIcon({ open }: { open: boolean }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      {open ? (
        <>
          <path d="M11 11L25 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M25 11L11 25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      ) : (
        <>
          <path d="M10 14H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M10 22H26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === routes.home ? pathname === href : pathname.startsWith(href);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-header-mobile xl:h-header bg-white/[0.31] backdrop-blur-60">
      <div className="mx-auto h-full max-w-container-xl 2xl:max-w-container px-4 xl:px-[72px]">
        <div className="flex h-full items-center justify-between">
          <Link href={routes.home} className="flex-shrink-0" aria-label={headerConfig.logoText}>
            <Logo />
          </Link>

          <nav className="hidden xl:flex items-center gap-6" aria-label="Головна навігація">
            {headerConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`text-[14px] uppercase leading-none text-brand-teal transition-opacity duration-200 hover:opacity-70 ${
                  isActive(link.href) ? 'font-medium' : 'font-normal'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link
            href={headerConfig.cta.href}
            className="hidden xl:inline-flex items-center justify-center gap-2.5 h-14 px-6 bg-brand-button text-brand-lime rounded-full text-[16px] font-medium transition-opacity duration-200 hover:opacity-90"
          >
            <span>{headerConfig.cta.label}</span>
            <ArrowIcon color="#EBFFB1" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Закрити меню' : 'Відкрити меню'}
            className="xl:hidden text-brand-dark"
          >
            <BurgerIcon open={menuOpen} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="xl:hidden absolute left-0 right-0 top-full bg-white px-4 pb-8 pt-4 shadow-lg"
        >
          <nav className="flex flex-col gap-6" aria-label="Мобільна навігація">
            {headerConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? 'page' : undefined}
                className={`text-[16px] uppercase leading-none text-brand-dark ${
                  isActive(link.href) ? 'font-medium' : 'font-normal'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={headerConfig.cta.href}
              className="inline-flex h-[52px] items-center justify-center gap-3 rounded-full bg-brand-button text-[16px] font-medium text-brand-lime"
            >
              <span>{headerConfig.cta.label}</span>
              <ArrowIcon color="#EBFFB1" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
