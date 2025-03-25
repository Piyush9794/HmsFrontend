import { useState, ChangeEvent } from "react";
import AdminLogin from "./AdminLogin";
import DoctorLogin from "./DoctorLogin";
import PatientLogin from "./PatientLogin";
const DropdownSwitcher: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<string>("Component1");

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedComponent(event.target.value);
    };

    return (
       <div className="conatiner">
        <div className="row">
            <div className="col-sm-10 mx-auto">
            <div className="p-4">
            <select
                onChange={handleSelectChange}
                value={selectedComponent}
                className="p-2 border rounded-md selectHover"
            >
                
                <option value="Component1">AdminLogin</option>
                <option value="Component2">DoctorLogin</option>
                <option value="Component3">PatientLogin</option>
            </select>

            <div className="mt-4 p-4 border rounded-md">
                {selectedComponent === "Component1" && <Component1 />}
                {selectedComponent === "Component2" && <Component2 />}
                {selectedComponent === "Component3" && <Component3 />}
            </div>
        </div>
            </div>
        </div>
       </div>
    );
};

const Component1: React.FC = () => <div className="text-blue-500"> <AdminLogin />  </div>;
const Component2: React.FC = () => <div className="text-green-500"><DoctorLogin /> </div>;
const Component3: React.FC = () => <div className="text-red-500"><PatientLogin /> </div>;

export default DropdownSwitcher;