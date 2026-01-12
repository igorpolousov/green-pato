import Image from 'next/image';
import { lusitana } from './fonts';

export default function GreenPatoLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <Image 
      src='/greenPato-logo'
      width={50}
      height={50}
      alt="green pato logo"
      />
      <p className="text-[44px]">Green Pato</p>
    </div>
  );
}
