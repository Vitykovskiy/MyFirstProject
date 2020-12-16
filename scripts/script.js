function choose_age_script() {
    switch (age.options.selectedIndex) {
        case 0:
            choose_button.className = "choose_no_selected_button";
            person.className = "choose_not_select";
            person.selectedIndex = 0;
            break;
        case 1:
            person.className = "choose_select";
            person.options[1].text = "Homer";
            person.options[2].text = "Amenemhat III";
            person.selectedIndex = 0;
            choose_button.className = "choose_no_selected_button";
            break;
        case 2:
            person.className = "choose_select";
            person.options[1].text = "средний 1";
            person.options[2].text = "средний 2";
            person.selectedIndex = 0;
            choose_button.className = "choose_no_selected_button";
            break;
        case 3:
            person.className = "choose_select";
            person.options[1].text = "новый 1";
            person.options[2].text = "новый 2";
            choose_button.className = "choose_no_selected_button";
            person.selectedIndex = 0;
    }
}

function choose_person_script() {
    if (age.selectedIndex != 0 & person.selectedIndex != 0) {
        choose_button.className = "choose_button"
    } else {
        choose_button.className = "choose_no_selected_button"
    }
}

function start_application() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("info").style.display = "block";
    var x = person.options[person.options.selectedIndex].text;
    //alert(x);
    switch (x) {
        case "Homer":
            info_image.src = "img/homeros.jpg";
            info_image.alt = "homeros";
            info_head.text = "HOMEROS";
            info_head.href = "https://en.wikipedia.org/wiki/Homer";

            info_text.textContent =
                "Homer is the presumed author of the Iliad and the Odyssey, " +
                "two epic poems that are the foundational works of ancient Greek literature."
            break;
        case "Amenemhat III":
            info_image.src = "img/Amenemhat III.jpg";
            info_image.alt = "Amenemhat III";
            info_head.text = "Amenemhat III";
            info_head.href = "https://en.wikipedia.org/wiki/Amenemhat_III";
            info_text.textContent =
                "Amenemhat III, also spelled Amenemhet III, was a pharaoh of the Twelfth Dynasty " +
                "of Egypt. He ruled from c. 1860 BC to c. 1814 BC, the highest known date being " +
                "found in a papyrus dated to Regnal Year 46, I Akhet 22 of his rule.";
            break;
        case "средний 1":
            info_image.src = "";
            info_image.alt = "средний 1";
            info_head.text = "средний 1";
            info_head.href = "#";
            info_text.textContent = "средний 1"
            break;
        case "средний 2":
            info_image.src = "";
            info_image.alt = "средний 2";
            info_head.text = "средний 2";
            info_head.href = "#";
            info_text.textContent = "средний 2"
            break;
        case "новый 1":
            info_image.src = "";
            info_image.alt = "новый 1";
            info_head.text = "новый 1";
            info_head.href = "#";
            info_text.textContent = "новый 1"
            break;
        case "новый 2":
            info_image.src = "";
            info_image.alt = "новый 2";
            info_head.text = "новый 2";
            info_head.href = "#";
            info_text.textContent = "новый 2";
            break;
    }
}

function return_to_choice() {
    document.getElementById("info").style.display = "none";
    age.selectedIndex = 0;
    choose_button.className = "choose_no_selected_button";
    person.className = "choose_not_select";
    document.getElementById("menu").style.display = "block";
}