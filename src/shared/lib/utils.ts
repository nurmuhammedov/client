import { DeviceType, UserRole } from '@topcoder/constants'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const noop = () => {}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const routeByRole = (role: UserRole | undefined | null): string => {
  switch (role) {
    case UserRole.INDIVIDUAL:
      return '/individual/appeals'
    case UserRole.LEGAL:
      return '/legal/appeals'
    case UserRole.INSPECTOR:
      return '/inspector/appeals'
    case UserRole.REGIONAL:
      return '/reginal/appeals'
    case UserRole.MANAGER:
      return '/manager/appeals'
    case UserRole.HEAD:
      return '/head/appeals'
    case UserRole.CHAIRMAN:
      return '/chairman/appeals'
    case UserRole.ADMIN:
      return '/admin/employees'
    default:
      return '/not-found'
  }
}

export function detectDeviceType(width: number): DeviceType {
  if (width < 768) return DeviceType.MOBILE
  if (width < 1024) return DeviceType.TABLET
  if (width < 1280) return DeviceType.LAPTOP
  if (width < 1536) return DeviceType.DESKTOP
  if (width < 2560) return DeviceType.LARGE_SCREEN
  if (width < 3840) return DeviceType.QHD_2K
  return DeviceType.UHD_4K
}

export function truncateString(value: string | null | undefined, maxLength: number = 50): string {
  if (!value) return '?'

  return value.length <= maxLength ? value : value.slice(0, maxLength) + '…'
}
