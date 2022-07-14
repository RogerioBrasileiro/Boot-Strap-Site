function teste() {
    /* let email = document.getElementById('inputEmail4').value;
    console.log(`Email: ${email}`); */
    const form = document.getElementsByClassName('row g-3')[0]
    const data = new FormData (form);
    const formJSON = Object.fromEntries(data.entries());

    console.log(formJSON);
}

