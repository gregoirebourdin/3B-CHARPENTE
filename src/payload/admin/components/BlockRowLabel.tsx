import { BlockRowTitle } from './BlockRowTitle'

type Props = { rowLabel?: string }

/**
 * Header of a section in the page builder: number, kind of section and its
 * own title (« 02 · Texte et image · Une charpente pensée pour durer »)
 * instead of Payload's empty « Sans titre » name field.
 */
export function BlockRowLabel({ rowLabel = '' }: Props) {
  return <BlockRowTitle kind={rowLabel.replace(/\s+\d+$/, '')} />
}
