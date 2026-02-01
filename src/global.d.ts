// Allow importing CSS and common static assets in TypeScript files
declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: any;
}
