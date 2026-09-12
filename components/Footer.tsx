import Image from 'next/image';
import Link from 'next/link';
import { footerConfig } from '@/config/footer';
import type { NavItem } from '@/config/navigation';
import { InstagramIcon } from '@/components/icons';
import { MixedTitle } from '@/components/ui';

const labelClass =
  'font-sans text-[14px] font-normal uppercase leading-none text-white transition-opacity duration-200 hover:opacity-70';

function ColumnHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-1 font-sans text-[14px] font-normal uppercase leading-none text-white/60">
      <span>/</span>
      <span>{title}</span>
      <span>/</span>
    </div>
  );
}

function isExternal(href: string) {
  return href.startsWith('http');
}

function FooterColumn({ title, links }: { title: string; links: readonly NavItem[] }) {
  return (
    <div className="flex flex-col gap-6 xl:gap-8">
      <ColumnHeading title={title} />
      <ul className="flex flex-col gap-5">
        {links.map((link) => (
          <li key={link.href}>
            {isExternal(link.href) ? (
              <a href={link.href} target="_blank" rel="noreferrer noopener" className={labelClass}>
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className={labelClass}>
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Title() {
  return (
    <MixedTitle
      as="p"
      segments={footerConfig.titleSegments}
      className="font-sans text-[24px] xl:text-[48px] font-normal leading-[1.2] tracking-[-0.01em] text-white/80"
      italicClassName="!text-[#EBFFB1]"
    />
  );
}

function Gallery() {
  return (
    <ul className="grid grid-cols-2 gap-4 xl:grid-cols-4 xl:gap-6">
      {footerConfig.gallery.map((photo, index) => {
        const isInstagramTile = index === footerConfig.gallery.length - 1;
        return (
          <li key={photo.src} className="relative aspect-square overflow-hidden rounded-xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={612}
              height={612}
              className="h-full w-full object-cover object-top"
            />
            {isInstagramTile && (
              <a
                href={footerConfig.instagramHref}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Instagram Оксани Романів"
                className="absolute inset-0 flex items-center justify-center bg-[#0F3F42]/40 backdrop-blur-[4px] transition-colors duration-200 hover:bg-[#0F3F42]/55"
              >
                <InstagramIcon color="#FFFFFF" size={32} />
              </a>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function BottomBar() {
  return (
    <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
      <p className="order-2 font-sans text-[14px] font-normal uppercase leading-none text-white/60 xl:order-1">
        {footerConfig.copyright}
      </p>
      <ul className="order-1 flex flex-col gap-6 xl:order-2 xl:flex-row xl:gap-6">
        {footerConfig.legal.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={labelClass}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-brand-green px-4 py-8 xl:px-[72px] xl:py-[120px]">
      <div className="mx-auto flex w-full max-w-container-lg flex-col gap-12 xl:max-w-[1296px] xl:gap-20">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:gap-[134px]">
          <div className="flex flex-col gap-6 xl:w-[636px] xl:gap-8">
            <p className="font-sans text-[16px] xl:text-[19px] font-normal uppercase leading-[1.1] text-white">
              {footerConfig.logo}
            </p>
            <Title />
          </div>

          <nav
            aria-label="Футер"
            className="grid grid-cols-2 gap-y-12 xl:flex xl:w-[526px] xl:justify-between xl:gap-[100px]"
          >
            <div className="order-1">
              <FooterColumn {...footerConfig.columns[0]} />
            </div>
            <div className="order-2 xl:order-3">
              <FooterColumn {...footerConfig.columns[2]} />
            </div>
            <div className="order-3 col-span-2 xl:order-2 xl:col-span-1">
              <FooterColumn {...footerConfig.columns[1]} />
            </div>
          </nav>
        </div>

        <div className="flex flex-col gap-12 xl:gap-6">
          <div className="order-2 xl:order-1">
            <Gallery />
          </div>
          <div className="order-1 xl:order-2">
            <BottomBar />
          </div>
        </div>
      </div>
    </footer>
  );
}
