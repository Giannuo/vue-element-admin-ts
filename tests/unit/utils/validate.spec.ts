import { isDemoValidUsername, isExternal } from '@/utils/validate'

describe('Utils:validate', () => {
  it('isDemoValidUsername', () => {
    expect(isDemoValidUsername('admin')).toBe(true)
    expect(isDemoValidUsername('editor')).toBe(true)
    expect(isDemoValidUsername('xxxx')).toBe(false)
  })

  it('isExternal', () => {
    expect(isExternal('https://www.armour.com/')).toBe(true)
    expect(isExternal('mailto:someone@test.com')).toBe(true)
    expect(isExternal('123aBC')).toBe(false)
  })
})
