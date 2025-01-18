
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AppContext} from "../contexts/AppContext.jsx";

const TopDoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
    return (
        <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
            <h1 className="text-3xl font-medium">Top Doctors To Book</h1>
            <p className="sm:w-1/3 text-center text-sm">Simply browse through our extensive list of trusted doctors</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5 px-3 sm:px-0">
                {doctors.slice(0, 10).map((item, index) => (
                    <div
                        onClick={()=>navigate(`/appointment/${item.id}`)}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
                        key={index}
                    >
                        <img className="bg-blue-50 w-full" src={item.image} alt="" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Available</p>
                            </div>
                            <p className="font-medium text-lg text-gray-900">{item.name}</p>
                            <p className="text-gray-600 text-sm">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={()=>{navigate('/doctors'); scrollTo(0,0) }} className="mt-10 px-12 py-3 bg-blue-50 text-gray-600 rounded-full ">More</button>
        </div>
    );
};

export default TopDoctors;
