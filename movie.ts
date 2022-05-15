export class Movie{

    public title:string;
    public releaseYear:number;
    public actors:string[];
    public nacionality:string;
    public director:string;
    public writer:string;
    public language:string;
    public  platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor(title:string,releaseYear:number,nacionality:string,genre:string){

        
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = null;
        this.nacionality = nacionality;
        this.director = null;
        this.writer = null;
        this.language = null;
        this.platform = null;
        this.isMCU = null;
        this.mainCharacterName = null;
        this.producer = null;
        this.distributor = null;
        this.genre = genre = null;                       


    }
   public setActors():void{

   }
    
    public consolePrintMovie():void{
      for(let value in this){
      if(value != null){
        console.log(this)  
      }  else{
          console.log(this)
      }
                      
         }         
    }
}