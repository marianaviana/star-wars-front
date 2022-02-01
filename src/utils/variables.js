export const colors = {
  black: '#000',
  torchRed: '#FF003B',
  mercury: '#E5E5E5',
  ripeLemon: '#F0C60F',
  shark: '#1A1B22',
  white: '#FFFFFF',
  wodsmoke: '#121318'
}

export const fonts = {
  default: '"Montserrat", sans-serif',
}

export const media = {
  ultraHd: '3840px',
  quadXl: '3072px',
  quadHd: '2560px',
  fullHd: '1920px',
  desktop: '1440px',
  tablet: '1024px',
  mobile: '767px',
  smaller: '480px'
}

export const hexToRgbA = (hex, opacity) => {
  let color
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split('')
    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]]
    }
    color = '0x' + color.join('')
    return `rgba(${[(color >> 16) & 255, (color >> 8) & 255, color & 255].join(
      ','
    )},${opacity})`
  }
  return '#000'
}
