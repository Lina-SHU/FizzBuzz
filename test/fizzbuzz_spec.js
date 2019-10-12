var should = chai.should()
describe('funciton fizzBuzz', function () {
  it('should be divided by 3 and return Fizz', function () {
    var result = fizzBuzz(6)
    var results = "Fizz"
    result.should.be.equal(results)
  })
  it('should be divided by 5 and return Buzz', function () {
    var result = fizzBuzz(10)
    var results = "Buzz"
    result.should.be.equal(results)
  })
  it('should be divided by 3 and 5,then return FizzBuzz', function () {
    var result = fizzBuzz(15)
    var results = "FizzBuzz"
    result.should.be.equal(results)
  })
  it('should not be divided by 3 and 5,then return the number itself', function () {
    var result = fizzBuzz(13)
    var results = 13
    result.should.be.equal(results)
  })
})