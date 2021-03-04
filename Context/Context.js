import React from 'react';

const ConfigContext= React.createContext({
  phoneNumber: "",
  startDate:"",
  endDate:"",
  changePhoneNumber : (phone) => {},
  changeStartDate : (date) => {},
  changeEndDate:(date) => {}
});

export default ConfigContext