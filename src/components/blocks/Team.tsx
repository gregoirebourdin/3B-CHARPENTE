import { Media, isMedia } from '@/components/ui/Media'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getVisibleTeam } from '@/lib/cms/queries'
import type { TeamBlock as Data } from '@/payload-types'

import styles from './Team.module.css'
import type { BlockProps } from './types'

/** Only members marked "visible" (with their consent) are shown. */
export async function Team({ block }: BlockProps<Data>) {
  const team = await getVisibleTeam()
  if (!team.length) return null
  return (
    <Section tone={block.tone} anchor={block.anchor}>
      <SectionHeading kicker={block.kicker} title={block.title} accent={block.titleAccent} intro={block.intro} />
      <ul className={styles.grid} data-count={team.length}>
        {team.map((member) => (
          <li key={member.id} className={styles.member} data-reveal="">
            {isMedia(member.photo) ? (
              <div className={styles.photo}>
                <Media media={member.photo} sizes="(min-width: 900px) 300px, 60vw" />
              </div>
            ) : (
              <span className={styles.initials} aria-hidden="true">
                {member.name
                  .split(/\s+/)
                  .map((part) => part.charAt(0))
                  .slice(0, 2)
                  .join('')}
              </span>
            )}
            <div className={styles.body}>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              {member.bio ? <p className={styles.bio}>{member.bio}</p> : null}
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
