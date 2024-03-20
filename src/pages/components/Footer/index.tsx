import { useTranslation } from 'next-i18next';
import Image from 'next/legacy/image';

export default function Footer() {
  const { t } = useTranslation(`common`);

  return (
    <footer className="flex flex-col items-center pb-4">
      <Image src="/icon/line.svg" width="125" height="54" />
      <div className="flex justify-center mt-10">
        <a className="hover:underline" href="https://zoz.la">
          {t(`twitter`)}
        </a>
        <span className="mx-2">·</span>
        <a className="transition hover:underline" href={t(`coffeeUrl`)}>
          {t(`coffee`)}
        </a>
      </div>
      <div className="text-gray-500 mt-3 px-6 text-center">&copy;2024</div>
    </footer>
  );
}
