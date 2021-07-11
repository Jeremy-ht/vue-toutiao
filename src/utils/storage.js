/**
 *  本地存储模块
 */

export const setItem = (name, vale) => {
  if (typeof vale === 'object') {
    vale = JSON.stringify(vale)
  }
  window.localStorage.setItem(name, vale)
}

export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    console.log(JSON.parse(data))
    return JSON.parse(data)
  } catch (err) {
    return window.localStorage.getItem(data)
  }
}

export const removeItem = name => {
  window.localStorage.removeItem(name)
}
