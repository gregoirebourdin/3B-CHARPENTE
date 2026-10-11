import { RscEntryLexicalCell as RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e } from '@payloadcms/richtext-lexical/rsc'
import { RscEntryLexicalField as RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e } from '@payloadcms/richtext-lexical/rsc'
import { LexicalDiffComponent as LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e } from '@payloadcms/richtext-lexical/rsc'
import { FixedToolbarFeatureClient as FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { InlineToolbarFeatureClient as InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { OrderedListFeatureClient as OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { UnorderedListFeatureClient as UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { LinkFeatureClient as LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { BoldFeatureClient as BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { ItalicFeatureClient as ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { ParagraphFeatureClient as ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { EmailCell as EmailCell_206c2b7370dc2af2d6b41dcc7c87a1ac } from '@/payload/admin/components/ContactCell'
import { ReplyActions as ReplyActions_206c2b7370dc2af2d6b41dcc7c87a1ac } from '@/payload/admin/components/ContactCell'
import { ExplorerNotice as ExplorerNotice_6037e6e625d7e068ef472f1710f335b4 } from '@/payload/admin/components/Notice'
import { ProofsNotice as ProofsNotice_6037e6e625d7e068ef472f1710f335b4 } from '@/payload/admin/components/Notice'
import { ReviewsNotice as ReviewsNotice_6037e6e625d7e068ef472f1710f335b4 } from '@/payload/admin/components/Notice'
import { HorizontalRuleFeatureClient as HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { BlockquoteFeatureClient as BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { HeadingFeatureClient as HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864 } from '@payloadcms/richtext-lexical/client'
import { OverviewComponent as OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860 } from '@payloadcms/plugin-seo/client'
import { MetaTitleComponent as MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860 } from '@payloadcms/plugin-seo/client'
import { MetaDescriptionComponent as MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860 } from '@payloadcms/plugin-seo/client'
import { PreviewComponent as PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860 } from '@payloadcms/plugin-seo/client'
import { AdminNav as AdminNav_05184afed72cf43bcceaeb537700561f } from '@/payload/admin/nav/AdminNav'
import { Icon as Icon_5b495d5fece06267c23afa6fda6451ee } from '@/payload/admin/components/Brand'
import { Logo as Logo_5b495d5fece06267c23afa6fda6451ee } from '@/payload/admin/components/Brand'
import { DashboardView as DashboardView_d01a06dadac0f17fcee7a785dbb34210 } from '@/payload/admin/views/DashboardView'
import { RequestsView as RequestsView_477080a1585e47ec5654936b52bb1e9f } from '@/payload/admin/views/requests/RequestsView'
import { HoursView as HoursView_20f99df0b0b0522fb74fc3c6140868ab } from '@/payload/admin/views/hours/HoursView'
import { CollectionCards as CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1 } from '@payloadcms/next/rsc'
import { BlobClientUploadHandler as BlobClientUploadHandler_bf180ffcc0eae6412c50e6fd01be383f } from '@/payload/storage/BlobClientUploadHandler'

/** @type import('payload').ImportMap */
export const importMap = {
  "@payloadcms/richtext-lexical/rsc#RscEntryLexicalCell": RscEntryLexicalCell_44fe37237e0ebf4470c9990d8cb7b07e,
  "@payloadcms/richtext-lexical/rsc#RscEntryLexicalField": RscEntryLexicalField_44fe37237e0ebf4470c9990d8cb7b07e,
  "@payloadcms/richtext-lexical/rsc#LexicalDiffComponent": LexicalDiffComponent_44fe37237e0ebf4470c9990d8cb7b07e,
  "@payloadcms/richtext-lexical/client#FixedToolbarFeatureClient": FixedToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#InlineToolbarFeatureClient": InlineToolbarFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#OrderedListFeatureClient": OrderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#UnorderedListFeatureClient": UnorderedListFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#LinkFeatureClient": LinkFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#BoldFeatureClient": BoldFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#ItalicFeatureClient": ItalicFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#ParagraphFeatureClient": ParagraphFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@/payload/admin/components/ContactCell#EmailCell": EmailCell_206c2b7370dc2af2d6b41dcc7c87a1ac,
  "@/payload/admin/components/ContactCell#ReplyActions": ReplyActions_206c2b7370dc2af2d6b41dcc7c87a1ac,
  "@/payload/admin/components/Notice#ExplorerNotice": ExplorerNotice_6037e6e625d7e068ef472f1710f335b4,
  "@/payload/admin/components/Notice#ProofsNotice": ProofsNotice_6037e6e625d7e068ef472f1710f335b4,
  "@/payload/admin/components/Notice#ReviewsNotice": ReviewsNotice_6037e6e625d7e068ef472f1710f335b4,
  "@payloadcms/richtext-lexical/client#HorizontalRuleFeatureClient": HorizontalRuleFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#BlockquoteFeatureClient": BlockquoteFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/richtext-lexical/client#HeadingFeatureClient": HeadingFeatureClient_e70f5e05f09f93e00b997edb1ef0c864,
  "@payloadcms/plugin-seo/client#OverviewComponent": OverviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
  "@payloadcms/plugin-seo/client#MetaTitleComponent": MetaTitleComponent_a8a977ebc872c5d5ea7ee689724c0860,
  "@payloadcms/plugin-seo/client#MetaDescriptionComponent": MetaDescriptionComponent_a8a977ebc872c5d5ea7ee689724c0860,
  "@payloadcms/plugin-seo/client#PreviewComponent": PreviewComponent_a8a977ebc872c5d5ea7ee689724c0860,
  "@/payload/admin/nav/AdminNav#AdminNav": AdminNav_05184afed72cf43bcceaeb537700561f,
  "@/payload/admin/components/Brand#Icon": Icon_5b495d5fece06267c23afa6fda6451ee,
  "@/payload/admin/components/Brand#Logo": Logo_5b495d5fece06267c23afa6fda6451ee,
  "@/payload/admin/views/DashboardView#DashboardView": DashboardView_d01a06dadac0f17fcee7a785dbb34210,
  "@/payload/admin/views/requests/RequestsView#RequestsView": RequestsView_477080a1585e47ec5654936b52bb1e9f,
  "@/payload/admin/views/hours/HoursView#HoursView": HoursView_20f99df0b0b0522fb74fc3c6140868ab,
  "@payloadcms/next/rsc#CollectionCards": CollectionCards_f9c02e79a4aed9a3924487c0cd4cafb1,
  "@/payload/storage/BlobClientUploadHandler#BlobClientUploadHandler": BlobClientUploadHandler_bf180ffcc0eae6412c50e6fd01be383f
}
