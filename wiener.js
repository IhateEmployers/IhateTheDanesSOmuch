const checkboxforstupid = document.querySelector("input");
checkboxforstupid.addEventListener("change", (stupid) => {
    if (stupid.target.checked) 
        document.querySelector(".meetballs").style.display="block"
else document.querySelector(".meetballs").style.display="none"
});