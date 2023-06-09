class Prostokat {
    constructor(wysokosc,szerokosc,nazwa){
        this.wysokosc=wysokosc;
        this.szerokosc=szerokosc;
        this.nazwa=nazwa;
    }
    wypisz() {
        console.log("Wysokosc to: "+this.wysokosc);
        console.log("szerokosc to: "+this.szerokosc);
        console.log("Nazwa to: "+this.nazwa);
    }
    obwod(){
        return 2*(this.wysokosc+this.szerokosc)
    }
    pole(){
       
        return this.wysokosc*this.szerokosc
    }
    porownaj(inny){
        if (this.pole() > inny.pole()){
            console.log(this.nazwa + " jest wiekszy")
        }
        else if (inny.pole() > this.pole()){
        console.log(inny.nazwa+" jest wiekszy")
        }
        else{
            console.log(" sa rowne")
        }
    }
    wypiszpole(){
        console.log("Pole rowne: "+ this.pole());
    }
    wypiszobwod(){
        console.log("Obwod rowny: "+ this.obwod());
    }
    zmiennazwe(x){
        this.nazwa=x
    }
}
const prost=new Prostokat(10,15,"Prost1");
const prost2=new Prostokat(3,10,"Prost2")
const prost3=new Prostokat(5,12,"Prost3")

console.log("Prostokat 1: ")
prost.wypisz();
prost.obwod();
prost.pole();
console.log("Prostokat 2: ")
prost2.wypisz();
prost2.obwod();
prost2.pole();
prost.porownaj(prost2);
prost.wypiszpole();
prost.wypiszobwod();

class Trapez {
    constructor(wysokosc,podstawa1,podstawa2,nazwa){
        this.wysokosc=wysokosc;
        this.podstawa1=podstawa1;
        this.podstawa2=podstawa2;
        this.nazwa=nazwa;
    }
    pole(){
        return ((this.podstawa1+this.podstawa2)/2)*this.wysokosc
    }
    wypiszpoletrap(){
        console.log("Pole rowne: "+ this.pole())
    }

}

const trapez1= new Trapez(10,15,30,"Trap");
const trapez2 = new Trapez(12,19,20,"Trap2");
const trapez3 = new Trapez(5,7,10,"Trapez3")
trapez1.wypiszpoletrap();



function porownac(x,y){
    if(x.pole()!=y.pole()){
        if(x.pole()>y.pole()){
            return x
        }
        else{
            return y
        }
    }
    else{
        return "... Oni sa rowne, jaden nie jest wiekszy"
    }
}


console.log("Wieksze pole ma: ");
console.log(porownac(trapez1,prost));
var x= "Test"
prost.zmiennazwe(x)
prost.wypisz()
