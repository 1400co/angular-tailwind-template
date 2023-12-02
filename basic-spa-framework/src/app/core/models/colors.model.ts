export type Colors = 'sky' | 'yellow' | 'green' | 'red' | 'violet' | 'gray' | 'success' | 'primary' | 'danger' | 'light';

export type ObjColors = Record<string, Record<string, boolean>>;

export const COLORS: ObjColors = {
  success: {
    'bg-green-700': true,
    'hover:bg-green-800': true,
    'focus:ring-green-300': true,
    'text-white': true,
  },
  primary: {
    'bg-blue-700': true,
    'hover:bg-blue-800': true,
    'focus:bg-blue-400': true,
    'text-white': true,
  },
  danger: {
    'bg-red-700': true,
    'hover:bg-red-800': true,
    'focus:ring-red-300': true,
    'text-white': true,
  },
  light: {
    'bg-gray-200': true,
    'hover:bg-gray-500': true,
    'focus:ring-gray-50': true,
    'text-gray-700': true,
  },
  sky: {
    'bg-sky-700': true,
    'hover:bg-sky-800': true,
    'focus:ring-sky-300': true,
    'text-white': true,
  },
  yellow: {
    'bg-yellow-700': true,
    'hover:bg-yellow-800': true,
    'text-white': true,
  },
  green: {
    'bg-green-700': true,
    'hover:bg-green-800': true,
    'text-white': true,
  },
  red: {
    'bg-red-700': true,
    'hover:bg-red-800': true,
    'text-white': true,
  },
  violet: {
    'bg-violet-700': true,
    'hover:bg-violet-800': true,
    'text-white': true,
  },
  gray: {
    'bg-gray-700': true,
    'hover:bg-gray-800': true,
    'text-white': true,
  },
}

export const BACKGROUNDS: ObjColors = {
  success: {
    'bg-green-600': true,
  },
  primary: {
    'bg-blue-600': true,
  },
  danger: {
    'bg-red-600': true,
  },
  light: {
    'bg-gray-600': true,
  },
  sky: {
    'bg-sky-600': true,
  },
  yellow: {
    'bg-yellow-600': true,
  },
  green: {
    'bg-green-600': true,
  },
  red: {
    'bg-red-600': true,
  },
  violet: {
    'bg-violet-400': true,
  },
  gray: {
    'bg-gray-600': true,
  },
}

export const NAVBAR_BACKGROUNDS: ObjColors = {
  success: {
    'bg-green-700': true,
  },
  primary: {
    'bg-blue-700': true,
  },
  danger: {
    'bg-red-700': true,
  },
  light: {
    'bg-gray-700': true,
  },
  sky: {
    'bg-sky-700': true,
  },
  yellow: {
    'bg-yellow-700': true,
  },
  green: {
    'bg-green-700': true,
  },
  red: {
    'bg-red-700': true,
  },
  violet: {
    'bg-violet-700': true,
  },
  gray: {
    'bg-gray-700': true,
  },
}
