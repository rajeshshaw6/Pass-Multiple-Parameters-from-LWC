import { LightningElement,wire,track } from 'lwc';
import accountSearch from '@salesforce/apex/AccountSearch.searchAccount';
export default class DynamicSearch extends LightningElement {
    @track accVal;
    accList;
    error;
    @track columns = [
        {
            label:'Account Name',
            fieldName:'Name'
        },
        {
            label:'ID',
            fieldName:'Id'
        },
        {
            label:'Phone',
            fieldName:'Phone'
        }
    ];

    // changeHandler(event)
    // {
    //     this.accVal = event.target.value;
    // }

    
    // @wire(accountSearch,{acc:'$accVal'})
    // receivedAccount({data,error})
    // {
    //     if(data)
    //     {
    //         this.accList = data;
    //         this.error = undefined;
    //     }
    //     else{
    //         this.accList = undefined;
    //         this.error = error;
    //     }
    // }

    

    //Imperative call on Submit of button
    submitHandler()
    {
        this.accVal = this.template.querySelector('lightning-input').value;
        accountSearch({acc:this.accVal}).then(result=>{
            console.log('Inside Result');
            this.accList = result;
            this.error = undefined;
        }).catch(error=>{
            console.log('Inside Error');
            this.error = error;
            this.accList = undefined;
        })
    }
}