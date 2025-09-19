
interface CheckServiceUseCase {
     execute( url: string ): Promise<boolean>;
}

type SuccessCallback = ( ) => void;
type FailureCallback = ( url: string, error: any ) => void;






export class CheckService implements CheckServiceUseCase {

    constructor(
        private readonly successCallback: SuccessCallback,
        private readonly failureCallback: FailureCallback
    ){} 
   
    public async execute( url: string ): Promise<boolean> {
        try {
            const req = await fetch( url );
            if( req.ok ){
                this.successCallback( )
                // console.log(`Service is up: ${url} - Status: ${req.status}`);
            }
            return true;
            
            
        } catch (error) {
            // console.log(error);
             this.failureCallback( url, error )
            
            return false;
        }
    }    

}