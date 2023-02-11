import { LightningElement,track } from 'lwc';
import returnAccount from '@salesforce/apex/inputApex.returnAccount';
export default class InputLwc extends LightningElement {
    input1;
    input2;
    accList;
    error;
    // @wire(getAccount,{accName:'$input1',accIndustry:'$input2'})   if you want to call using wire decorator
    // wiredAccount({data,error})
    // {
    //     if(data)
    //     {
    //         this.accList = data;
    //         this.error = undefined;
    //     }
    //     else if(error){
    //         this.accList = undefined;
    //         this.error = error;
    //     }
    // }

    @track columns = [
        {
            label:'Account Name',
            fieldName:'Name'
        },
        {
            label:'Website',
            fieldName:'Website'
        }
    ];

    submitHandler()
    { 
        this.input1 = this.template.querySelector('[data-id="text1"]').value;
        this.input2 = this.template.querySelector('[data-id="text2"]').value;
        console.log('Input 1' + this.input1);
        console.log('Input 2' + this.input2);
        returnAccount({accName:this.input1,accWebsite:this.input2}).then(result=>{
            this.accList = result;
            this.error = undefined;
        }).catch(error=>{
            this.accList = undefined;
            this.error=error;
        }) 
    }
}