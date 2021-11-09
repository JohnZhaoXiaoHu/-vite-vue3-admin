// generate components map

// auto load
const modulesFiles = import.meta.globEager('./*.ts')

export const constantRouterComponents = {} as any
Object.keys(modulesFiles).forEach((path) => {
  // if (path.startsWith('./index.')) return

  const value = modulesFiles[path].default

  // mouted
  Object.keys(value).forEach((ele) => {
    constantRouterComponents[ele] = value[ele]
  })
})
