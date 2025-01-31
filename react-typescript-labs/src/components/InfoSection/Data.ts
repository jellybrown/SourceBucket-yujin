import svg1 from '../../assets/images/svg-1.svg';
import svg2 from '../../assets/images/svg-2.svg';
import svg3 from '../../assets/images/svg-3.svg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Bank',
  headLine: 'Unlimited Transactions with zero fees',
  description:
    'Get access to out exclusive app that allows you ' +
    'to send unlimited transactions without getting ' +
    'charged any fees.',
  buttonLabel: 'Get started',
  imgStart: false,
  img: svg1,
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
  headLine: 'Login to youre account at any time',
  description:
    'We have you covered no matter where you are located. All ' +
    'you need is an internet connection and a phone or computer.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: svg2,
  alt: 'Piggybank',
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
  headLine: 'Creating an account is extremely easy',
  description:
    'Get everything set up and ready in under 10 minutes. All ' +
    "you need to do is add your information and you're ready to go.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: svg3,
  alt: 'Paper',
  dark: false,
  primary: false,
  darkText: true,
};
