import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    files: `${buildFolder}/files/`,
    templates: buildFolder,
    styles: `${buildFolder}/css/`,
    img: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    js: `${srcFolder}/js`,
    templates: `${srcFolder}/templates/`,
    styles: `${srcFolder}/scss/`,
    images: `${srcFolder}/img`,
    svg: `${srcFolder}/img/**/*.svg`,
  },
  watch: {
    images: `${srcFolder}/img/**/*.{ jpg,jpeg,png,gif,webp,ico,svg }`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder
}