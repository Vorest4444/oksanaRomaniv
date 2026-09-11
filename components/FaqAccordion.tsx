'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

function ToggleIcon({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-md transition-colors duration-200 ${
        open ? 'bg-white' : 'bg-brand-lime'
      }`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 12H19" stroke="#122F35" strokeWidth="1.5" strokeLinecap="round" />
        {!open && <path d="M12 5V19" stroke="#122F35" strokeWidth="1.5" strokeLinecap="round" />}
      </svg>
    </span>
  );
}

export function FaqAccordion({ items }: { items: readonly FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <ul className="flex w-full flex-col gap-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <li
            key={item.question}
            className="rounded-2xl border border-brand-dark/10 bg-brand-green-50 p-6 xl:p-8"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenIndex(open ? -1 : index)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-heading text-[18px] xl:text-[20px] font-medium leading-none tracking-[-0.01em] text-brand-dark">
                  {item.question}
                </span>
                <ToggleIcon open={open} />
              </button>
            </h3>
            {open && (
              <p className="mt-4 font-inter text-[16px] font-normal leading-[1.5] tracking-[-0.02em] text-brand-dark/80">
                {item.answer}
              </p>
            )}
          </li>
        );
      })}
    </ul>
  );
}
