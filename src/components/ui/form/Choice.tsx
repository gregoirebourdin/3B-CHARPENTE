import type { InputHTMLAttributes, ReactNode } from 'react'

import { Icon } from '@/components/ui/Icon'

import styles from './Form.module.css'

type Props = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { type: 'checkbox' | 'radio'; children: ReactNode; invalid?: boolean }

/**
 * One answer among several, as a card: a drawn box (tick) or circle (dot).
 * The real input stays underneath, invisible, for keyboards and screen readers.
 */
export function Choice({ type, children, invalid, className, ...input }: Props) {
  return (
    <label className={`${styles.choice} ${type === 'radio' ? styles.radio : ''} ${className ?? ''}`} data-invalid={invalid || undefined}>
      <input type={type} {...input} />
      <span className={styles.mark} aria-hidden="true">
        {type === 'checkbox' ? <Icon name="check" size={14} strokeWidth={3} /> : <span className={styles.dot} />}
      </span>
      <span className={styles.choiceText}>{children}</span>
    </label>
  )
}

export const choicesClass = styles.choices
