import Swal from 'sweetalert2'

const faildAlert = (title)=>{
    const alert = Swal.fire({
        icon : "error",
        title: title,
        confirmButtonColor : "#c7170a"
    });

    return alert
}

export default faildAlert