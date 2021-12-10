

const onFocusBlur = (
  target: HTMLElement | null,
  callbackFocus: (target: any, e: any) => void,
  callbackBlur: (target: any, e: any) => void
) => {
  if (target) {
    target.addEventListener('focus', (e) => {
      callbackFocus(target, e)
    })
    target.addEventListener('blur', (e) => {
      callbackBlur(target, e)
    })
  }
}

const getKey = <T extends object, U extends keyof T>(obj: T) => (key: U) => (value: any) => 
{
  obj[key] = value
}

export { onFocusBlur, getKey }