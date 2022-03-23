class Practice  {
    constructor(a,b,c,d) {
        this.name = a;
        this.namess = b
        this.namesss = c
        this.namssse = d

    }

    funstsss() {
        console.log('Besssssforeservice')
    }

    static Fun () {
        var lessst = new Practice({namess: 'asdasd'});
        lessst.name = "age";
        lessst.add = "age";
        lessst.age = "age";
        // console.log('Practice', lessst)
        return lessst
    }

    funst(a, b, c) {
        console.log('Beforeservice', this)
    }
 }

 var neee = new Practice(1,2,34,5);

console.log(neee.funst(1, 2, 3))