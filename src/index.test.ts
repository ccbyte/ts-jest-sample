import { addOne } from './index'
describe('addOne test', () => {
    it('number', () => {
        let res = addOne(1)
        expect(res).toBe(2)
    })
})
