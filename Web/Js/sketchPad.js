class SketchPad{
    constructor(container, size=400){
        this.canvas = document.createElement("canvas");
        this.canvas.width = size;
        this.canvas.height = size;
        this.canvas.style=`
            background-color:white;
            box-shadow: 0px 0px 10px 2px black;
        `;
        container.appendChild(this.canvas);   
        
        //To Draw On this Canvas, we are going to use canvas context to 2D Context
        this.ctx = this.canvas.getContext("2d");

        //Detect Mouse using a private method (method with hashtag infront are private method)
        this.#addEventListeners();

        //private methods cannot be called from outside the class they're assigned


    }

    #addEventListeners(){
        //we will detect the On mouse down action and we will figure out the coordinates
        this.canvas.onmousedown = (evt) =>{
            //first get the rectangle of the canvas bouding area
            const rect = this.canvas.getBoundingClientRect();
            //then obtain the mouse coordinates by taking the clientX of the above event minus the left side of the rectangle
            const mouse = [
                Math.round(evt.clientX - rect.left),
                Math.round(evt.clientY - rect.top)
            ];
            //notice for mouse, we used an array syntax. So rect.left is x cordinate and rect.top is y cordinate
            //because we don't need high precision for the cordinate we add Math.round{} later
            console.log(mouse);
        }
    }


}