
const Base_Url='http://localhost:8080/api/employee/create';

import React from 'react'
import axios from 'axios'

const EmployeeService = () => {
  return axios.get(Base_Url)
}

export default EmployeeService
