import Swal from "sweetalert2";
import "../../Assets/css/Utils/Validations/DeleteAlert.css"
const DeleteAlert = ({onDelete}) => {
	const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "black",
      confirmButtonText: "Yes, delete it!",
			customClass: {
        popup: 'custom-popup',
				title: 'custom-title',
				content: 'custom-content'
      },
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete(); 
      }
    });
  };

  return handleDelete; 
};

export default DeleteAlert;
