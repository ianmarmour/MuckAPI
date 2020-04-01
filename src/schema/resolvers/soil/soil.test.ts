import { soil } from "./soil";

describe("name", () => {
    it("Should return the soil brand", async() => {
        const mockContext: any = jest.fn()

        expect(await soil.brand({id: "0000", brand: "test", moistureLevel: 10}, {}, mockContext, {})).toEqual("test")
    })

    it("Should return the soil moistureLevel", async() => {
        const mockContext: any = jest.fn()

        expect(await soil.moistureLevel({id: "0000", brand: "test", moistureLevel: 10}, {}, mockContext, {})).toEqual(10)
    })
});

