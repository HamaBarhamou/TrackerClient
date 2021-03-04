import React from 'react';
import Context from './Context';
export default class GlobalState extends React.Component{
    //startDate:new Date(1614432745872),
    nb=Date.now()//1614432745872
    //date1=new Date(this.nb)
    //date2=this.date1
    state = {
        phoneNumber: null,
        startDate:new Date(this.nb),
        endDate:new Date(this.nb+30*24*3600*1000),
    }
    changePhoneNumber = (phone) => {
        this.setState({phoneNumber:phone})
    };
    changeStartDate = (date) => {
        this.setState({startDate:date})
    };
    changeEndDate=(date) => {
        this.setState({endDate:date})
    };
    render(){
        return(
            <Context.Provider 
            value={{
                phoneNumber:this.state.phoneNumber,
                startDate:this.state.startDate,
                endDate:this.state.endDate,
                changePhoneNumber:this.changePhoneNumber,
                changeStartDate:this.changeStartDate,
                changeEndDate:this.changeEndDate
            }}
           >
            {this.props.children}
           </Context.Provider>
        )
    }
}