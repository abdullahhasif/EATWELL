
// let sections = document.querySelectorAll('div');
// let navlinks = document.querySelectorAll('nav');

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = set.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             navlinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('nav-items a [href*=' + id + ']').classlist.add ('active');

//             });
//         };
//     });
// };



function validate(){
    if (document.myform.Name.value == ""){
        alert("Please Provide Your Name: ");
        document.myform.Name.focus();
        return false;
    }


    var emailID = document.myform.EMail.value;
    if (emailID.trim() === "") {
        alert("Please enter your Email.");
        document.myform.EMail.focus();
        return false;
    }

    var atpos = emailID.indexOf("@");
    var dotpos = emailID.lastIndexOf(".");

    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter a valid Email.");
        document.myform.EMail.focus();
        return false;
    }

    if (document.myform.message.value.trim() === "") {
        alert("Please enter your Message.");
        document.myform.message.focus();
        return false;
    }

    return true;
}
