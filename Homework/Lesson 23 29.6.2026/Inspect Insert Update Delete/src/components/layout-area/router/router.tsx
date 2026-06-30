import {Routes, Route} from 'react-router-dom'
import { Home } from '../../pages-area/home/home';
import { EmployeesList } from '../../pages-area/employees-list/employees-list';
import { AddEmployee } from '../../pages-area/add-employee/add-employee';
import { EmployeeDetails } from '../../pages-area/employees-list/employee-details/employee-details';
import { EmployeeEdit } from '../../pages-area/employees-list/employee-edit/employee-edit';

export function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/employees' element={<EmployeesList/>}/>
                <Route path='/addemployee' element={<AddEmployee/>}/>
                <Route path='/employees/details/:prodId' element={<EmployeeDetails/>}/>
                <Route path='/employees/edit/:prodId' element={<EmployeeEdit/>}/>


            </Routes>
			

        </div>
    );
}
