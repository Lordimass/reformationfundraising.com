var info_active = true

async function register_click_handlers() {
    async function info_tab() {
        if (!info_active) {
            info_active = true

            let current_grad = window.getComputedStyle(info_tab_el).getPropertyValue("background-image")
            info_tab_el.style.backgroundImage = "none";
            info_tab_el.style.backgroundColor = "white";
            chat_tab_el.style.backgroundImage = current_grad;
            info_tab_div.style.display = "block";
            chat_tab_div.style.display = "none";
        }
    }
    
    async function chat_tab() {
        if (info_active) {
            info_active = false

            let current_grad = window.getComputedStyle(chat_tab_el).getPropertyValue("background-image")
            chat_tab_el.style.backgroundImage = "none";
            chat_tab_el.style.backgroundColor = "white";
            info_tab_el.style.backgroundImage = current_grad;
            info_tab_div.style.display = "none";
            chat_tab_div.style.display = "block";
        }
    }

    const info_tab_div = document.getElementById("info-tab")
    const chat_tab_div = document.getElementById("chat-tab")

    const info_tab_el = document.getElementById("info-tab-button")
    info_tab_el.addEventListener("click", info_tab)
    const chat_tab_el = document.getElementById("chat-tab-button")
    chat_tab_el.addEventListener("click", chat_tab)
    
}


document.addEventListener("DOMContentLoaded", register_click_handlers)