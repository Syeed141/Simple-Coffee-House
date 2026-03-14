import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, chef, price , _id} = coffee;

  const handleDelete = (id) => {

    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const pt = "https://i.ibb.co.com/bjTftd29/1.png";

  return (
    <div className="bg-[#F5F4F1] rounded-lg p-6 flex items-center justify-between gap-6 shadow-sm">
      <div className="w-28 h-40 flex items-center justify-center">
        <img src={pt} alt={name} className="max-h-full object-contain" />
      </div>

      <div className="flex-1 space-y-2 text-gray-700">
        <p className="text-lg">
          <span className="font-semibold text-black">Name:</span> {name}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-black">Chef:</span> {chef}
        </p>
        <p className="text-lg">
          <span className="font-semibold text-black">Price:</span> {price} Taka
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <button className="btn btn-sm bg-[#D2B48C] border-none text-white hover:bg-[#c19a6b]">
          <FaEye />
        </button>
        <button className="btn btn-sm bg-[#3C393B] border-none text-white hover:bg-black">
          <FaEdit />
        </button>
        <button
          onClick={()=>handleDelete(_id)}
          className="btn btn-sm bg-[#EA4744] border-none text-white hover:bg-red-600"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
