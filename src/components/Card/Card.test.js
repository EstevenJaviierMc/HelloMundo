const Card = require("./Card")

// @ponicode
describe("componentWillMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["a1969970175", 56784, 987650], [12345, 987650, 12345], [987650, 56784, 12345]]
        inst = new Card.default(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
