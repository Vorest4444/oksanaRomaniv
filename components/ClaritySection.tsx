'use client';

import { ArrowIcon } from '@/components/icons';

function PlayIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M47.9999 10.6667H15.9999C10.1089 10.6667 5.33325 15.4424 5.33325 21.3334V42.6667C5.33325 48.5578 10.1089 53.3334 15.9999 53.3334H47.9999C53.891 53.3334 58.6666 48.5578 58.6666 42.6667V21.3334C58.6666 15.4424 53.891 10.6667 47.9999 10.6667Z"
        stroke="#3E857A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.5707 32.8575C39.218 32.4691 39.218 31.5309 38.5707 31.1425L28.181 24.9087C27.5145 24.5088 26.6665 24.9889 26.6665 25.7662V38.2338C26.6665 39.0111 27.5145 39.4912 28.181 39.0913L38.5707 32.8575Z"
        stroke="#3E857A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0"
    >
      <path
        d="M24.125 34.1H39.875M24.125 42.5H32M11 15.2V48.8C11 49.9139 11.5531 50.9822 12.5377 51.7698C13.5223 52.5575 14.8576 53 16.25 53H47.75C49.1424 53 50.4777 52.5575 51.4623 51.7698C52.4469 50.9822 53 49.9139 53 48.8V24.3182C52.9999 23.7587 52.8601 23.2048 52.5887 22.6891C52.3173 22.1734 51.9199 21.7063 51.4198 21.3152L39.7648 12.197C38.7839 11.4298 37.4668 11.0001 36.095 11H16.25C14.8576 11 13.5223 11.4425 12.5377 12.2302C11.5531 13.0178 11 14.0861 11 15.2Z"
        stroke="#3E857A"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.3328 11.3333V21.9999C37.3328 23.4144 37.8947 24.771 38.8949 25.7712C39.8951 26.7713 41.2516 27.3333 42.6661 27.3333H53.3328"
        stroke="#3E857A"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ClaritySection() {
  return (
    <section id="free-lesson" className="w-full flex justify-center px-5 xl:px-[72px] py-16 xl:py-24">
      <div className="w-full max-w-[1296px] flex flex-col items-center gap-[60px]">
        {/* A) SECTION HEADER */}
        <div className="w-full max-w-[1296px] min-h-[173px] flex flex-col items-start gap-8">
          {/* A1) Subheader Container */}
          <div className="w-full max-w-[416px] min-h-[85px] flex flex-col justify-end items-start gap-[21px]">
            <div className="flex flex-row items-center gap-1 h-[14px] font-sans text-[14px] font-normal uppercase text-[#10444780]">
              / НЕ ЗНАЄШ, З ЧОГО ПОЧАТИ? /
            </div>
            <h2 className="w-full font-sans text-[32px] xl:text-[56px] font-medium leading-[90%] tracking-[-0.01em] text-[#122F35]">
              Почни з <span className="font-playfair text-[32px] xl:text-[56px] font-medium italic leading-[90%] tracking-[0.01em] text-[#3E857A]">ясності</span>
            </h2>
          </div>

          {/* A2) Description Container */}
          <div className="w-full max-w-[1296px] min-h-[56px] flex flex-col xl:flex-row justify-between xl:items-center items-start gap-8">
            <div className="w-full max-w-[524px] min-h-[54px] font-inter text-[16px] xl:text-[18px] font-normal leading-[150%] tracking-[-0.02em] text-[#10444780]">
              Я пропоную тобі пройти <span className="font-bold text-[#122F35]">безкоштовний урок</span>, що дає ясність.
              <br />
              Побач, де ти зараз і який твій наступний крок.
            </div>
            <button
              type="button"
              className="hidden xl:flex h-14 w-[247px] flex-row items-center justify-center gap-[10px] border border-[#122F35] rounded-[100px] px-6 bg-transparent whitespace-nowrap"
            >
              <span className="font-sans text-[16px] font-medium text-[#122F35]">
                Отримати безкоштовно
              </span>
              <span className="w-6 h-6 flex shrink-0 [&>svg]:w-6 [&>svg]:h-6">
                <ArrowIcon color="#122F35" />
              </span>
            </button>
          </div>
        </div>

        {/* B) CARDS ROW */}
        <div className="w-full max-w-[1296px] min-h-[280px] flex flex-col xl:flex-row items-stretch xl:items-center gap-6">
          {/* B1) Card 1 - Video */}
          <div className="w-full xl:w-[636px] xl:h-[280px] min-h-[280px] p-8 flex flex-col gap-6 bg-[#F4FAF8] border border-[rgba(16,68,71,0.12)] rounded-2xl">
            <div className="w-full max-w-[572px] min-h-[216px] flex flex-col gap-6">
              <div className="flex flex-row justify-between items-center gap-4 min-h-16">
                <h3 className="font-playfair text-[24px] xl:text-[32px] font-medium italic leading-[90%] tracking-[0.01em] text-[#122F35]">
                  40-хвилинний відеоурок
                </h3>
                <PlayIcon />
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-inter text-[16px] font-light leading-[130%] tracking-[-0.02em] text-[rgba(6,59,54,0.7)]">
                  Ти отримаєш чітке розуміння:
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    'чому зусилля не завжди дають результат',
                    'як внутрішні конфлікти, страхи й хаос блокують рух',
                    'як відрізнити «я хочу» від «я справді готова»',
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-px bg-[rgba(6,59,54,0.7)]" />
                      <span className="font-inter text-[16px] font-light leading-[130%] tracking-[-0.02em] text-[rgba(6,59,54,0.7)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* B2) Card 2 - Worksheet */}
          <div className="w-full xl:w-[636px] xl:h-[280px] min-h-[280px] p-8 flex flex-col gap-6 bg-[#F4FAF8] border border-[rgba(16,68,71,0.12)] rounded-2xl">
            <div className="w-full max-w-[572px] min-h-[216px] flex flex-col gap-6">
              <div className="flex flex-row justify-between items-center gap-5 min-h-16">
                <h3 className="font-playfair text-[24px] xl:text-[32px] font-medium italic leading-[90%] tracking-[0.01em] text-[#122F35]">
                  Бланк для практичної роботи
                </h3>
                <FileIcon />
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-inter text-[16px] font-light leading-[130%] tracking-[-0.02em] text-[rgba(6,59,54,0.7)]">
                  Ти отримаєш простий, але точний робочий інструмент, який допоможе:
                </p>
                <ul className="flex flex-col gap-3 list-none p-0 m-0">
                  {[
                    'розкласти свою ситуацію по поличках',
                    'побачити, де ти застрягла',
                    'сформувати свій наступний правильний крок',
                  ].map((item, i) => (
                    <li key={i} className="flex flex-row items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-px bg-[rgba(6,59,54,0.7)]" />
                      <span className="font-inter text-[16px] font-light leading-[130%] tracking-[-0.02em] text-[rgba(6,59,54,0.7)]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="flex xl:hidden h-[52px] w-full flex-row items-center justify-center gap-3 border border-[#122F35] rounded-[100px] px-6 bg-transparent"
        >
          <span className="font-sans text-[16px] font-medium text-[#122F35]">
            Отримати безкоштовно
          </span>
          <span className="w-[18px] h-[18px] flex shrink-0 [&>svg]:w-[18px] [&>svg]:h-[18px]">
            <ArrowIcon color="#122F35" />
          </span>
        </button>
      </div>
    </section>
  );
}
