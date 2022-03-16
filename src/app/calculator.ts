export class Calculator {

    name:string;
    math:string;
    eng:string;
    kisw:string;
    bio : string;
    chem :string;
    biz:string;
    agri:string
    sum!: number;
    constructor(name:string,math:string,eng:string,kisw:string,bio : string,chem :string, biz:string,agri:string){
        this.name = name;
        this.math = math;
        this.eng = eng;
        this.kisw = kisw;
        this.bio=bio;
        this.chem= chem;
        this.biz = biz;
        this.agri = agri;
    }


    add(){

       
        switch (this.math) {
            case 'A':
                this.sum +=12
                break;
            case 'A-':
                this.sum +=11
                break;
            case 'B+':
                this.sum +=10
                break;
            case 'B':
                this.sum +=9
                break;
            case 'B-':
                this.sum +=8
                break;
            case 'C+':
                this.sum +=7
                break;
            case 'C-':
                this.sum +=6
                break;
            case 'D+':
                this.sum +=5
            break;
            case 'D':
                this.sum +=4
                break;
            case 'D-':
                this.sum +=3
                break;
        
            default:
                this.sum +=0
                break;
        }
        

    }
    
}
