import {createMedia} from '@artsy/fresnel';

const { Media, MediaContextProvider } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    desktop: 1024,
  },
})

export { Media, MediaContextProvider };
