import Image from 'next/image';

export const Logo = () => { 
  return (
    <Image
      src="/estudo-facil-logo.png"
      alt="Estudo fácil logo"
      width={169}
      height={53}
    />
  )
}