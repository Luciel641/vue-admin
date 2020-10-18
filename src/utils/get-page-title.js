import settings from '@/settings'

const title = settings.title || 'Vue Admin'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  } else {
    return title
  }
}
