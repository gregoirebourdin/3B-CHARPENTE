'use client'

import type { Where } from 'payload'
import { createContext, useContext } from 'react'

/**
 * What the photo field that opened « Choisir dans les photos » allows: its
 * filter (e.g. only « Ambiance » photos) and the photos it already holds.
 * The drawer renders the Photos screen inside the field, so the screen reads
 * this context to become a picker that respects the field.
 */
export type PhotoPicker = { where: Where | null; selected: number[] }

export const PhotoPickerContext = createContext<PhotoPicker | null>(null)

export const usePhotoPicker = () => useContext(PhotoPickerContext)
