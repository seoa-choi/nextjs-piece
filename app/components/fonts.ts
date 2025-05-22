import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트는 weight 지정안함
export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
});

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Thin.woff', weight: '100' },
    { path: '../../public/fonts/Pretendard-ExtraLight.woff', weight: '200' },
    { path: '../../public/fonts/Pretendard-Light.woff', weight: '300' },
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-SemiBold.woff', weight: '600' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
    { path: '../../public/fonts/Pretendard-ExtraBold.woff', weight: '800' },
    { path: '../../public/fonts/Pretendard-Black.woff', weight: '900' },
  ],
  display: 'swap',
});
