var foo=2
function f(){
    console.log('m2')
}
var m1=require('./model1')
m1.f();
exports.foo=foo