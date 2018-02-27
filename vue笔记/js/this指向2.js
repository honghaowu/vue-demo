var fullName="hello";
var obj={
    fullName: 'js',
    prop: {
        getFullName: function () {
            return this.fullName;
        }
    }
}
console.log(obj.prop.getFullName());
var test=obj.prop.getFullName;
console.log(test());
// undefined  hello
/**
 * obj.prop.getFullName()中的this是obj.prop; prop里面没有fullName
 * test中的this为window
 */
