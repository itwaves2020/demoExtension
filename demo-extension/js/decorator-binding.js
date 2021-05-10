$(document).ready(() => {
    const ele = document.createElement("service-wrapper");
    ele.setAttribute("merchandId", "merch ID");
    ele.setAttribute("myBooking", "true");
    ele.setAttribute("class", "disabled");
    ele.setAttribute("cursor", "");
    ele.setAttribute("limit", "50");
    ele.setAttribute("isDeleted", false);
    console.log("sfkljadf salk fsakl kal fksa kfla == > > >  ", document.getElementById('service-wrapper-div'))
    document.getElementById('service-wrapper-div').appendChild(ele);
})