class Security {

    constructor(acx,acy,bcx,bcy,actCode){
        this.acx=acx;
        this.acy=acy;
        this.bcx=bcx;
        this.bcy=bcy;
        this.actCode=actCode;
        // Add code to create the input and button elements
        this.access1=createInput("Code1");
        this.access1.position(this.acx,this.acy);
        this.access1.style('background','white');

        this.button=createButton("Check");
        this.button.position(this.bcx,this.bcy);
        this.button.style('background','lightgrey');


    }

    display(){

        // Add code to make the buttons function as expected
        this.button.mousePressed(()=>{
            if(System.authenticate(this.actCode,this.access1.value())){
                this.button.hide();
                this.access1.hide();
                score++;
            }
        });
    }
}