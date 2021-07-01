import ReactGA from 'react-ga'

export const searchClickTrack = () => {
  ReactGA.event({
    category: 'search',
    action: 'click',
    label: 'Search na Menu Bar'
  })
}

export const frontendClickTrack = () => {
  ReactGA.event({
    category: 'frontend',
    action: 'click',
    label: 'Link frontend na Menu Bar'
  })
}

export const backendClickTrack = () => {
  ReactGA.event({
    category: 'backend',
    action: 'click',
    label: 'Link backend na Menu Bar'
  })
}

export const themeTracker = theme => {
  ReactGA.event({
    category: 'theme',
    action: 'view',
    label: `Usa ${theme} theme`,
    nonInteraction: true
  })
}

export const menuTracker = () => {
  ReactGA.event({
    category: 'menu',
    action: 'click',
    label: 'Link Menu na Menu Bar'
  })
}

export const topClickTrack = () => {
  ReactGA.event({
    category: 'top',
    action: 'click',
    label: `Top na Menu Bar`
  })
}