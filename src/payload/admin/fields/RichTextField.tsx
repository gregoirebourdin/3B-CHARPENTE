'use client'

import { useField } from '@payloadcms/ui'
import { CharacterCount, Placeholder } from '@tiptap/extensions'
import { EditorContent, useEditor, useEditorState, type Editor } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Bold, Heading2, Heading3, Italic, Link2, List, ListOrdered, Minus, Quote, Redo2, Undo2 } from 'lucide-react'
import type { JSONFieldClientProps } from 'payload'
import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'

import { isDoc, isRichTextEmpty, type TiptapNode } from '@/lib/richtext'

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { cn, focusRing } from '../ui/utils'
import { FieldShell, fieldId } from './FieldShell'
import { LinkPanel } from './richtext/LinkPanel'
import { SiteLink } from './richtext/siteLink'

type Variant = 'basic' | 'article'
type Props = JSONFieldClientProps & { variant?: Variant; placeholder?: string }

/**
 * The text editor of the admin (Tiptap): bold, italic, lists and links for
 * texts inside sections; titles, quotes and separators for guides and legal
 * pages. What is written is stored as Tiptap JSON and drawn by the site.
 */
export function RichTextField(props: Props) {
  const { field, path: pathFromProps, readOnly, validate, variant = 'basic', placeholder = 'Écrivez ici…' } = props
  const { required } = field
  const memoizedValidate = useCallback(
    (value: unknown, options: Record<string, unknown>) => {
      if (required && isRichTextEmpty(value)) return 'Ce texte est obligatoire.'
      return typeof validate === 'function' ? (validate as (v: unknown, o: Record<string, unknown>) => true | string)(value, { ...options, required }) : true
    },
    [validate, required],
  )
  const { customComponents, disabled, path, setValue, showError, errorMessage, value } = useField<TiptapNode | null>({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate as never,
  })
  const id = fieldId(path)
  const article = variant === 'article'

  const extensions = useMemo(
    () => [
      StarterKit.configure({
        heading: article ? { levels: [2, 3] } : false,
        blockquote: article ? {} : false,
        horizontalRule: article ? {} : false,
        code: false,
        codeBlock: false,
        strike: false,
        underline: false,
        link: false,
      }),
      SiteLink.configure({ openOnClick: false, autolink: true, linkOnPaste: true, defaultProtocol: 'https', HTMLAttributes: { rel: null, target: null } }),
      Placeholder.configure({ placeholder }),
      CharacterCount,
    ],
    [article, placeholder],
  )

  const editor = useEditor({
    extensions,
    content: isDoc(value) ? value : null,
    editable: !(readOnly || disabled),
    immediatelyRender: false,
    editorProps: {
      attributes: {
        id,
        role: 'textbox',
        'aria-multiline': 'true',
        'aria-labelledby': `${id}-label`,
        'aria-describedby': `${id}-help`,
        class: 'tb-editor__content',
      },
    },
    // Only a real change of the text marks the page as modified (and starts the draft autosave).
    onUpdate: ({ editor: current, transaction }) => {
      if (!transaction.docChanged) return
      setValue(current.isEmpty ? null : (current.getJSON() as TiptapNode))
    },
  })

  // A value changed elsewhere (version restored, form reset): show it, unless it is what is being typed.
  useEffect(() => {
    if (!editor || editor.isFocused) return
    const next = isDoc(value) ? value : null
    if (JSON.stringify(next) !== JSON.stringify(editor.isEmpty ? null : editor.getJSON())) editor.commands.setContent(next, { emitUpdate: false })
  }, [editor, value])

  // Without an « update » event: switching to read-only is not a change of the text.
  useEffect(() => {
    const editable = !(readOnly || disabled)
    if (editor && editor.isEditable !== editable) editor.setEditable(editable, false)
  }, [editor, readOnly, disabled])

  return (
    <FieldShell
      field={field}
      path={path}
      type="json tb-rich-text"
      required={required}
      customComponents={customComponents}
      showError={showError}
      errorMessage={errorMessage}
      labelAs="span"
      labelId={`${id}-label`}
    >
      <div
        className={cn(
          'tb-editor tw:overflow-hidden tw:rounded-xs tw:border tw:border-solid tw:border-line-strong tw:bg-card tw:transition-[border-color,box-shadow] tw:duration-180',
          'tw:focus-within:border-forest tw:focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--c-accent)_24%,transparent)]',
          showError && 'tw:border-error',
        )}
        onClick={(event) => {
          // A click in the empty space under the text puts the cursor at the end.
          if (event.target === event.currentTarget) editor?.commands.focus('end')
        }}
      >
        {editor ? <Toolbar editor={editor} article={article} disabled={readOnly || disabled} /> : <div className="tw:h-12 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:bg-surface" />}
        <EditorContent editor={editor} />
        {editor ? <Footer editor={editor} /> : null}
      </div>
    </FieldShell>
  )
}

function Toolbar({ editor, article, disabled }: { editor: Editor; article: boolean; disabled?: boolean }) {
  const state = useEditorState({
    editor,
    selector: ({ editor: current }) => ({
      bold: current.isActive('bold'),
      italic: current.isActive('italic'),
      h2: current.isActive('heading', { level: 2 }),
      h3: current.isActive('heading', { level: 3 }),
      bullet: current.isActive('bulletList'),
      ordered: current.isActive('orderedList'),
      quote: current.isActive('blockquote'),
      link: current.isActive('link'),
      canUndo: current.can().undo(),
      canRedo: current.can().redo(),
    }),
  })
  const [linkOpen, setLinkOpen] = useState(false)
  const chain = () => editor.chain().focus()

  return (
    <TooltipProvider>
      <div
        role="toolbar"
        aria-label="Mise en forme du texte"
        className="tw:sticky tw:top-0 tw:z-[2] tw:flex tw:flex-wrap tw:items-center tw:gap-1 tw:border-0 tw:border-b tw:border-solid tw:border-line tw:bg-surface tw:px-2 tw:py-1.5"
      >
        <ToolButton label="Gras" shortcut="Ctrl B" active={state.bold} disabled={disabled} onClick={() => chain().toggleBold().run()} icon={<Bold />} />
        <ToolButton label="Italique" shortcut="Ctrl I" active={state.italic} disabled={disabled} onClick={() => chain().toggleItalic().run()} icon={<Italic />} />
        <Separator />
        {article ? (
          <>
            <ToolButton label="Titre de partie" active={state.h2} disabled={disabled} onClick={() => chain().toggleHeading({ level: 2 }).run()} icon={<Heading2 />} />
            <ToolButton label="Sous-titre" active={state.h3} disabled={disabled} onClick={() => chain().toggleHeading({ level: 3 }).run()} icon={<Heading3 />} />
            <Separator />
          </>
        ) : null}
        <ToolButton label="Liste à puces" active={state.bullet} disabled={disabled} onClick={() => chain().toggleBulletList().run()} icon={<List />} />
        <ToolButton label="Liste numérotée" active={state.ordered} disabled={disabled} onClick={() => chain().toggleOrderedList().run()} icon={<ListOrdered />} />
        {article ? (
          <>
            <ToolButton label="Citation" active={state.quote} disabled={disabled} onClick={() => chain().toggleBlockquote().run()} icon={<Quote />} />
            <ToolButton label="Ligne de séparation" disabled={disabled} onClick={() => chain().setHorizontalRule().run()} icon={<Minus />} />
          </>
        ) : null}
        <Separator />
        <LinkPanel editor={editor} open={linkOpen} onOpenChange={setLinkOpen}>
          <ToolButton
            label={state.link ? 'Modifier le lien' : 'Ajouter un lien'}
            shortcut="Ctrl K"
            active={state.link}
            disabled={disabled}
            onClick={() => setLinkOpen((open) => !open)}
            icon={<Link2 />}
            withLabel
          />
        </LinkPanel>
        <span className="tw:ml-auto tw:flex tw:items-center tw:gap-1">
          <ToolButton label="Annuler" shortcut="Ctrl Z" disabled={disabled || !state.canUndo} onClick={() => chain().undo().run()} icon={<Undo2 />} />
          <ToolButton label="Rétablir" shortcut="Ctrl Maj Z" disabled={disabled || !state.canRedo} onClick={() => chain().redo().run()} icon={<Redo2 />} />
        </span>
      </div>
      <LinkShortcut editor={editor} onOpen={() => setLinkOpen(true)} />
    </TooltipProvider>
  )
}

/** Ctrl/Cmd + K opens the link panel from the text. */
function LinkShortcut({ editor, onOpen }: { editor: Editor; onOpen: () => void }) {
  useEffect(() => {
    const element = editor.view.dom
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        onOpen()
      }
    }
    element.addEventListener('keydown', onKeyDown)
    return () => element.removeEventListener('keydown', onKeyDown)
  }, [editor, onOpen])
  return null
}

function ToolButton({
  label,
  shortcut,
  icon,
  active,
  disabled,
  onClick,
  withLabel,
}: {
  label: string
  shortcut?: string
  icon: ReactNode
  active?: boolean
  disabled?: boolean
  onClick?: () => void
  withLabel?: boolean
}) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          type="button"
          aria-label={withLabel ? undefined : label}
          aria-pressed={active === undefined ? undefined : active}
          disabled={disabled}
          onMouseDown={(event) => event.preventDefault()}
          onClick={onClick}
          className={cn(
            'tw:inline-flex tw:h-9 tw:min-w-9 tw:cursor-pointer tw:items-center tw:justify-center tw:gap-1.5 tw:rounded-xs tw:border-0 tw:bg-transparent tw:px-2 tw:font-sans tw:text-[15px] tw:font-semibold tw:text-ink tw:transition-colors tw:duration-180',
            'tw:hover:bg-card tw:disabled:cursor-not-allowed tw:disabled:opacity-35 tw:[&_svg]:size-[18px]',
            'tw:aria-pressed:bg-forest tw:aria-pressed:text-on-forest tw:aria-pressed:hover:bg-forest',
            focusRing,
          )}
        >
          {icon}
          {withLabel ? <span>Lien</span> : null}
        </button>
      </TooltipTrigger>
      <TooltipContent>
        {label}
        {shortcut ? <span className="tw:ml-2 tw:opacity-70">{shortcut}</span> : null}
      </TooltipContent>
    </Tooltip>
  )
}

const Separator = () => <span aria-hidden="true" className="tw:mx-1 tw:h-6 tw:w-px tw:bg-line-strong" />

function Footer({ editor }: { editor: Editor }) {
  const words = useEditorState({ editor, selector: ({ editor: current }) => (current.storage.characterCount as { words: () => number }).words() })
  return (
    <div className="tw:flex tw:items-center tw:justify-between tw:gap-3 tw:border-0 tw:border-t tw:border-solid tw:border-line tw:px-3.5 tw:py-2 tw:text-sm tw:text-stone-text">
      <span>Entrée : nouveau paragraphe · Maj + Entrée : retour à la ligne</span>
      <span className="tw:tabular-nums">
        {words} mot{words > 1 ? 's' : ''}
      </span>
    </div>
  )
}
