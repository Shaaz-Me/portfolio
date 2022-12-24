const form = document.getElementById("contact_form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const data = {
        name: form.yourName.value,
        email: form.yourMail.value,
        phone: form.yourPhone.value,
        message: form.yourMessage.value
    }
    // console.log(data);
    fetch("/contact", {

        // Adding method type
        method: "POST",

        // Adding body or contents to send
        body: JSON.stringify(data),

        // Adding headers to the request
        headers: {
            "Content-type": "application/json",
        }
    })

        // Converting to JSON
        .then(response => response.json())

        // Displaying results to console
        .then(res => {
            if(res.success){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Submitted',
                    showConfirmButton: false,
                    timer: 1500
                }).then(() => {
                    form.reset();
                });
            }
            else{
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Details',
                    text: 'Enter valid details'
                }).then(() =>
                    form.reset()
                );
            }
        });
});