import   GreenPatoLogo   from './ui/gp-logo'
import { UserCircleIcon, ShoppingCartIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image'
import Search from '@/app/ui/search';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex justify-between items-center h-20 shrink-0 items-end rounded-lg bg-yellow-500 p-4 md:h-22">
        <PhoneIcon className="h-10 w-10 rotate-[15deg]" />
        + 7 977 818 9585
        <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Главная
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Культуры
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Доставка и оплата
          </Link>

            <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            О магазине
          </Link>

            <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Контакты
          </Link>

      </div>
      <div className="flex justify-between items-center h-20 shrink-0 items-end rounded-lg bg-lime-500 p-4 md:h-52">
         <GreenPatoLogo /> 
         <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Каталог
          </Link>
          <Search placeholder="Поиск товаров..." />
           <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            Найти
          </Link>
           <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
           <ShoppingCartIcon className="h-20 w-20 rotate-[0deg]" />
          Корзина
          </Link>
        <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-lime-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
           <UserCircleIcon className="h-20 w-20 rotate-[0deg]" />
           Вход
          </Link>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p className={`${lusitana.className} text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Добро пожаловать Green Pato</strong> Питомник луковичных культур{' '}
            <a href="https://greenpato.ru/" className="text-blue-500">
              Основной сайт GreenPato.ru
            </a>
             Посевной материал собственного производства
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
           <Image
        loading="eager"
        src="/main-screen-garlic.webp"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
        <Image
        loading="eager"
        src="/main-screen-garlic.webp"
        width={560}
        height={620}
        className="block md:hidden"
        alt="Screenshot of the dashboard project showing mobile version"
      />
        </div>
      </div>
    </main>
  );
}
