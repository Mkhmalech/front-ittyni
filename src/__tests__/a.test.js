const addTwoVariables = (a,b) => (a+b); 

describe("This a First test of ittyni lab", ()=>{
    test('add two variables', ()=>{

        expect(addTwoVariables(1, 4)).toBe(5);
    })
})

