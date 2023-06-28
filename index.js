const select=document.getElementById("select")


    function change(){
    switch (select.value) {
            case "Gray":
             document.body.style.backgroundColor="gray";
                break;
            case "Aquamarine":
                document.body.style.backgroundColor="Aquamarine";
            break;

            case "Maroon":
                document.body.style.backgroundColor="Maroon";
            break;

            case "Teal":
                document.body.style.backgroundColor="Teal";
            break;

            case "Crimson":
                document.body.style.backgroundColor="Crimson";
            break;

            case "Khaki":
                document.body.style.backgroundColor="Khaki";
            break;

            case "Turquoise":
                document.body.style.backgroundColor="Turquoise";
            break;

            case "red":
                document.body.style.backgroundColor="red";
            break;

            case "purple":
                document.body.style.backgroundColor="purple";
            break;

        default:
            break;
    }
}
