import { AppWindow, Ellipsis, House, Image, Inbox, SlidersHorizontal, type LucideIcon } from 'lucide-react'

import type { NavIcon } from './items'

export const NAV_ICONS: Record<NavIcon, LucideIcon> = {
  home: House,
  inbox: Inbox,
  site: AppWindow,
  image: Image,
  settings: SlidersHorizontal,
  more: Ellipsis,
}
