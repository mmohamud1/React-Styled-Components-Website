import img1 from '../../images/svg1.svg';
import img2 from '../../images/svg2.svg';
import img3 from '../../images/svg3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Platform',
  headline: 'Unlimited Transactions with zero fees',
  description:
    'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees.',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: img1,
  alt: 'Car',
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description:
    'We have you covered no matter where you are located. All you need is an internet connection and a device to use this service on.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: img2,
  alt: 'Piggy Bank',
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join our Team',
  headline: 'Creating an account is extremely easy',
  description:
    'Get everything set up and ready in under 15 minutes. All you need to do is add your information and you are ready to go. ',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: img3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
