export class Calculator {

    name:string;
    math:string;
    eng:string;
    kisw:string;
    bio : string;
    chem :string;
    biz:string;
    agri:string
    sum: number;
    university1!: string;
    university2!: string;
    university3!: string;
    university4!: string;
    university5!: string;
    university6!: string;
    unicourse!:string[];
    tech1!: string;
    tech2!: string;
    tech3!: string;
    tech4!: string;
    tech5!: string;
    techcourse!:string[];
    constructor(name:string,math:string,eng:string,kisw:string,bio : string,chem :string, biz:string,agri:string){
        this.name = name;
        this.math = math;
        this.eng = eng;
        this.kisw = kisw;
        this.bio=bio;
        this.chem= chem;
        this.biz = biz;
        this.agri = agri;
        this.sum = 0

        this.university1 ='Jomo kenyatta university of agriculture and technology'
        this.university2 ='kenyatta university '
        this.university3 ='University of Nairobi'
        this.university4 ='Egerton university'
        this.university5 ='Moi university eldoret'
        this.university6 ='Jaramogi oginga odinga'

        this.tech1 = "Nyeri polytechnic"
        this.tech2 = "RiftValley Institute of Science and technology"
        this.tech3 = "Kisumu national polytechnic"
        this.tech4 = "kabete polytechnic"
        this.tech5 = "nakuru polytechnic"


        this.unicourse.push("Bachelor of science (Civil eng)")
        this.unicourse.push("Bachelor of science (Electrical eng)")
        this.unicourse.push("Bachelor of science (Medicine)")
        this.unicourse.push("Bachelor of science (Real estate)")
        this.unicourse.push("Bachelor of science (Computer science)")
        this.unicourse.push("Bachelor of science (Geomatics engineeing)")
        this.unicourse.push("Bachelor of science (Analytical chem)")


        this.unicourse.push("Bachelor of science (Information Technology)")
        this.unicourse.push("Bachelor of science (Analytical chem)")
        this.unicourse.push("Bachelor of science (Industrial chem)")

        this.unicourse.push("Bachelor of arts (Food science)")
        this.unicourse.push("Bachelor of arts (Business administration)")
        this.unicourse.push("Bachelor of arts (Bcom)")
        this.unicourse.push("Bachelor of arts (Food science)")

        this.techcourse.push("Diploma in Nursing")
        this.techcourse.push("Diploma in WoodWork")
        this.techcourse.push("Diploma in Information techology")
        this.techcourse.push("Diploma in Electical enginering")
        this.techcourse.push("Diploma in Civil enginering")
        this.techcourse.push("Diploma in Toursim ")
        this.techcourse.push("Diploma in Catering")


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
        console.log("asas"+this.sum)
        switch (this.eng) {
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
        switch (this.kisw) {
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
        switch (this.biz) {
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
         switch (this.bio) {
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
        switch (this.agri) {
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
        switch (this.chem) {
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
        
        
        console.log("asas"+this.sum)

    }


    display(){
        return this.sum;
    }
    

    showUnivesity(){

       



    }
}
