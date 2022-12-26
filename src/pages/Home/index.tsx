import { GitHubLogoIcon } from '@radix-ui/react-icons'
import clsx from 'clsx'
import { FacebookLogo, PaperPlaneTilt, WhatsappLogo } from 'phosphor-react'
import Logo from '../../../public/Logo'
import { Button } from '../../components/Button'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { Heading } from '../../components/Heading'
import { Social } from '../../components/Social'
import { Tec } from '../../components/Tecs'
import { Text } from '../../components/Text'

const width = window.innerWidth;
const heigth = window.innerHeight;
const ASPECT_RATIO = width / heigth;
console.log("W:", width, "H: ", heigth, "RATIO:", ASPECT_RATIO);
console.log("==========================================");

export function Home() {
  return (
    <section className='bg-d-blue-500 w-full h-screen'>
      <div className='w-full absolute z-10'>
        <Header />
      </div>

      <div className='h-auto w-full overflow-hidden overflow-y-auto md:h-full'>
        <section className='w-auto h-full backImg relative md:h-full justify-center'>
          {/* DESKTOP */}
          <Tec.Root className={
            clsx(
              "flex-nowrap tecs justify-center hidden lg:flex max-w-full",
              {
                'mt-[-4%]': heigth > 800,
              }
            )
          }>
            <Tec.JS />
            <Tec.Ts />
            <Tec.Rct />
            <Tec.Node />
            <Tec.Php />
            <Tec.Lrv />
            <Tec.Cig />
            <Tec.Wp />
            <Tec.Msql />
            <Tec.Post />
            <Tec.Mongo />
            <Tec.Aws />
            <Tec.Gc />
          </Tec.Root>
          {/* ====== */}

          <div className='w-full backGrad py-20 top-0 flex justify-center md:py-24 md:h-full'>
              <div className='w-full p-6 max-w-6xl'>

                <div className={
                  clsx(
                    {
                      'my-8': heigth > 800
                    }
                  )
                }>
                  <Heading size='lg' className='text-[36px]'>Hérico Mateus</Heading>
                  <Heading size='lg' className='text-[36px] mt-[-6px] mb-4'>Gimo</Heading>
                </div>
                
                <div className={clsx(
                    {
                      'my-8': heigth > 800
                    }
                )}>
                    <Text className='font-normal text-md'>
                      Sou desenvolvedor 
                      <Text className='font-extrabold text-md'> Full-Stack </Text>
                    </Text>
                    <Text className='text-md' asChild>
                      <p>e entusiasta em web design.</p>
                    </Text>
                </div>
                
                <Button.Root outRing className={
                  clsx(
                    'mt-6',
                    {
                      'my-8 md:mt-14': heigth > 800,
                    }
                  )
                }>
                  <Text size='sm'>Contacte-me</Text>
                  <Button.Icon>
                    <PaperPlaneTilt size={20} className="text-gray-300"/>
                  </Button.Icon>
                </Button.Root>

                <div className={
                  clsx(
                    'w-full mt-14 md:mt-10',
                    {
                      'md:mt-20': heigth > 800,
                    }
                  )
                }>
                  <Social.All width={heigth > 800 ? '32' : '26'} heigth={heigth > 800 ? '32' : '26'}/>
                </div>

                <div className="h-[1px] w-full max-w-[80%] md:max-w-[27%] bg-green-500 mt-4"></div>

                <div className={
                  clsx(
                    'flex justify-between w-full',
                    {
                      'mt-6': heigth > 800
                    }
                  )
                }>
                  <div className='w-full flex gap-4 mt-3 md:max-w-xs'>
                    <div className='flex flex-col items-start justify-start'>
                      <Heading size='sm' className='font-bold' asChild>
                        <p>4+</p>
                      </Heading>
                      <Text size='sm' className='text-gray-100'>Anos de experiência</Text>
                    </div>
                    
                    <div className='flex flex-col items-start justify-start'>
                      <Heading size='sm' className='font-bold' asChild>
                        <p>10+</p>
                      </Heading>
                      <Text size='sm' className='text-gray-100'>Projectos concluídos</Text>
                    </div>
                    
                    <div className='flex flex-col items-start justify-start'>
                      <Heading size='sm' className='font-bold' asChild>
                        <p>10+</p>
                      </Heading>
                      <Text size='sm' className='text-gray-100'>Clientes Satisfeitos</Text>
                    </div>
                  </div>
                  
                  <div className='w-full hidden justify-end items-end flex-col md:flex'>
                    <Text size='sm' className='font-light max-w-xs md:max-w-lg italic text-end text-white'>“A persistência e o amor pelo processo, dilaceram a genealidade como um leão dilacera uma zebra”</Text>
                    <Text size='sm' className='font-light italic text-end text-white'>-Thiago Fintch</Text>
                  </div>
                </div>

                <div className='w-full justify-end items-end flex flex-col mt-12 md:hidden'>
                  <Text size='sm' className='font-light max-w-xs md:max-w-md italic text-end text-gray-100'>“A persistência e o amor pelo processo, dilaceram a genealidade como um leão dilacera uma zebra”</Text>
                  <Text size='sm' className='font-light italic text-end text-gray-100'>-Thiago Fintch</Text>
                </div>
                
                {/* MOBILE */}
                <Tec.Root className="flex-nowrap md:justify-end mt-8 md:max-w-5xl lg:hidden">
                  <Tec.JS />
                  <Tec.Ts />
                  <Tec.Rct />
                  <Tec.Node />
                  <Tec.Php />
                  <Tec.Lrv />
                  <Tec.Cig />
                  <Tec.Wp />
                </Tec.Root>
                {/* ====== */}
              </div>
          </div>
        </section>

        <Footer />
      </div>
    </section>
  )
}
