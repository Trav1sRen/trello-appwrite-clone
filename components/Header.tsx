import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { Avatar } from '@nextui-org/avatar';
import { Input } from '@nextui-org/input';
import Image from 'next/image';

export default function Header() {
  return (
    <header className='flex flex-col items-center justify-between bg-gray-500/10 p-5 md:flex-row'>
      <Image
        priority
        src='/trello_logo.png'
        alt='Trello Logo'
        width={300}
        height={100}
        className='w-44 object-contain pb-8 md:w-56 md:pb-0'
      />
      <div className='flex w-full flex-1 justify-center gap-5 md:justify-end'>
        <form className='w-3/4 md:w-auto'>
          <Input
            isClearable
            placeholder='Search'
            startContent={
              <MagnifyingGlassIcon className='h-6 w-6 cursor-default text-gray-400' />
            }
          />
          <button hidden type='submit'>
            Search
          </button>
        </form>
        <Avatar
          src='https://i.pravatar.cc/150?u=a04258114e29026302d'
          showFallback
        />
      </div>
    </header>
  );
}
