import { ProofsBar } from '@/components/templates/ProofsBar'
import type { ProofsBlock as Data } from '@/payload-types'

import type { BlockProps } from './types'

export function Proofs({ block }: BlockProps<Data>) {
  return <ProofsBar variant={block.variant} />
}
