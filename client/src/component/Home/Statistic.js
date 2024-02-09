import { FaUserCheck,FaHospitalSymbol,FaUserNurse} from "react-icons/fa";
import {GrSecure} from "react-icons/gr";

export const Statistic = () => {
  return (
    <div className="px-4 py-2 mx-auto bg-gradient-to-bl from-teal-300 to-teal-100">
      <div className="flex flex-row justify-evenly ">
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 ">
            <FaUserCheck className="animate-bounce"/>
          </div>
          <h6 className="text-md font-bold text-deep-purple-accent-400">
            819k +
          </h6>
          <p className="mb-2 text-md"> Active User</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 ">
            <FaHospitalSymbol className="animate-bounce"/>
          </div>
          <h6 className="text-md font-bold text-deep-purple-accent-400">
            250+
          </h6>
          <p className="mb-2 text-md"> Hospitals</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 ">
            <FaUserNurse className="animate-bounce"/>
          </div>
          <h6 className="text-md font-bold text-deep-purple-accent-400">
            250+
          </h6>
          <p className="mb-2 text-md"> Care Takker</p>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-100 ">
            <GrSecure className="animate-bounce"/>
          </div>
          <h6 className="text-md font-bold text-deep-purple-accent-400">
            Fully
          </h6>
          <p className="mb-2 text-md"> Secure</p>
        </div>
      </div>
    </div>
  );
};
