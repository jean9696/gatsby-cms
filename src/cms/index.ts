import CMS from 'netlify-cms-app'

import { PagePreview } from './previewTemplates'
import { PageWidget } from './widgets'
import withCss from './withCss'

CMS.registerWidget(`image-gallery`)
CMS.registerPreviewTemplate('pages', withCss(PagePreview))
CMS.registerWidget('page', PageWidget)
