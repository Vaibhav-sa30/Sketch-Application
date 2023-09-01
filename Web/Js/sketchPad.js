class SketchPad{
    constructor(container, size=500){
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

        //define the paths
        this.path = [];
        this.isDrawing = false;

        //Detect Mouse using a private method (method with hashtag infront are private method)
        this.#addEventListeners();

        //private methods cannot be called from outside the class they're assigned


    }

    #addEventListeners(){
        //we will detect the On mouse down action and we will figure out the coordinates
        this.canvas.onmousedown = (evt) =>{
            //first get the rectangle of the canvas bounding area
            const rect = this.canvas.getBoundingClientRect();
            //then obtain the mouse coordinates by taking the clientX of the above event minus the left side of the rectangle
            const mouse = [
                Math.round(evt.clientX - rect.left),
                Math.round(evt.clientY - rect.top)
            ];
            //notice for mouse, we used an array syntax. So rect.left is x cordinate and rect.top is y cordinate
            //because we don't need high precision for the cordinate we add Math.round{} later
            //console.log(mouse);'''
            
            //Now, we start debugging
            this.path = [mouse];
            this.isDrawing = true;
        }
        // Now, we'll do same as above but for 'on mouse move'
        this.canvas.onmousemove = (evt) =>{
            //we want this only if we are drawing
            if(this.isDrawing){
                //first get the rectangle of the canvas bouding area
                const rect = this.canvas.getBoundingClientRect();
                //then obtain the mouse coordinates by taking the clientX of the above event minus the left side of the rectangle
                const mouse = [
                    Math.round(evt.clientX - rect.left),
                    Math.round(evt.clientY - rect.top)
                ];
                //notice for mouse, we used an array syntax. So rect.left is x cordinate and rect.top is y cordinate
                //because we don't need high precision for the cordinate we add Math.round{} later
                //console.log(mouse);'''
                
                //Now, we start debugging
                this.path.push[mouse];
                console.log(this.path.length);
            }
            
        }
        this.canvas.onmousemove = (evt) =>{
            //we want this only if we are drawing
            if(this.isDrawing){
                //first get the rectangle of the canvas bouding area
                
                //notice for mouse, we used an array syntax. So rect.left is x cordinate and rect.top is y cordinate
                //because we don't need high precision for the cordinate we add Math.round{} later
                //console.log(mouse);'''
                const mouse = this.#getMouse(evt);
                //Now, we start debugging
                this.path.push[mouse];
                console.log(this.path.length);
            }
        }
        this.canvas.onmouseup = (evt) => {
            this.isDrawing = false;
        }



    }

    #getMouse = (evt) => {
        const rect = this.canvas.getBoundingClientRect();
                //then obtain the mouse coordinates by taking the clientX of the above event minus the left side of the rectangle
        reurn[
            Math.round(evt.clientX - rect.left),
            Math.round(evt.clientY - rect.top)
        ];
    }
}