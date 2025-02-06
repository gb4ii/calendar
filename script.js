document.addEventListener("DOMContentLoaded", function() {
    // Selectăm elementele din pagină
    const timerButton = document.getElementById("btn-timer");
    const calendarButton = document.getElementById("btn-calendar");
    const timerContainer = document.getElementById("timer-container");
    const calendarContainer = document.getElementById("calendar-container");

    // La apăsarea butonului pentru cronometru
    timerButton.addEventListener("click", function() {
        timerContainer.classList.remove("hidden");
        calendarContainer.classList.add("hidden");
        updateTimer(); // Întreținerea cronometrului
    });

    // La apăsarea butonului pentru calendar
    calendarButton.addEventListener("click", function() {
        calendarContainer.classList.remove("hidden");
        timerContainer.classList.add("hidden");
        generateCalendar(); // Crearea calendarului
    });
});

function updateTimer() {
    const startDate = new Date(2024, 6, 17); // 17 Iulie 2024
    const timerDisplay = document.getElementById("timer-display");

    function update() {
        const currentDate = new Date();
        const timeDiff = currentDate - startDate;

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        timerDisplay.textContent = `${days} zile, ${hours} ore, ${minutes} minute, ${seconds} secunde`;
    }

    setInterval(update, 1000);
}

function generateCalendar() {
    const messages = [
        "Ziua 1: hi baby, i just wanted to say that i feel like the luckiest person because i have u in my life and i get to spend everyday with u.",
        "Ziua 2: hi my pretty girl,being with you feels like everything makes sense. i don't need anything else when you are by my side. i’m so grateful to have you in my life ",
        "Ziua 3: just so yk ur everything ive ever wanted in a girl. i love u sm baby",
        "Ziua 4: ever since we've met i've never stopped thinking about you i love u so so so much",
        "Ziua 5: im so in love with u and this will never change.",
        "Ziua 6: i choose you,and ill always choose you over any other girl.",
        "Ziua 7: azi e v-day si vreau sa iti spun in primul rand ca imi pare rau ca nu putem sa fim impreuna azi. chiar daca nu ne am vazut fizic vreodata, vreau sa ti spun ca o sa fiu mereu langa tine cum pot indiferent de cat de greu o sa fie, o sa te iubesc mereu.vreau sa ma casatoresc cu tine si sa facem tot ce ne-am planuit. te iubesc si nici o alta fata nu ma va putea face sa ma razgandesc. cat timp traiesc, o sa ai mereu pe cineva care sa te iubeasca din ce in ce mai mult in fiecare zi, chiar daca o sa o terminam candva. ( sper ca nu ) toata perioada asta in care am vorbit, mi am dat seama cat de useless o sa fie sa incep sa vb cu altcineva daca 'noi' nu o sa mai existe. nimeni nu ma va face sa ma simt cum ma faci tu pentru ca esti cea mai speciala fata pentru mine si asa o sa fie mereu. sper sa nu ne despartim vreodata. te iubesc cel mai mult din lumea asta,iubita mea. -de la sotul tau, gabi"
    ];

    const currentDate = new Date(); // Data curentă
    const startDate = new Date(2025, 1, 7); // Data de început a calendarului (7 februarie 2025)

    const daysContainer = document.getElementById("days");

    for (let i = 0; i < messages.length; i++) {
        const dayWrapper = document.createElement("div");
        dayWrapper.classList.add("day-box-wrapper");

        const letter = document.createElement("div");
        letter.classList.add("letter");
        letter.textContent = `Ziua ${i + 1}`;

        // Creați un element pentru mesajul ascuns
        const message = document.createElement("div");
        message.classList.add("message");
        message.innerHTML = messages[i];
        letter.appendChild(message);

        // Calculăm data pentru ziua respectivă
        const targetDate = new Date(startDate);
        targetDate.setDate(startDate.getDate() + i);

        // Verificăm dacă ziua curentă este mai mare sau egală cu ziua respectivă
        if (currentDate >= targetDate) {
            // Permitem deschiderea mesajului pentru zilele trecute sau ziua curentă
            letter.addEventListener("click", function() {
                letter.classList.toggle("open");
                message.style.display = message.style.display === "block" ? "none" : "block";
            });
        } else {
            // Dacă ziua nu a ajuns încă, blocăm caseta
            letter.classList.add("locked");
            letter.style.cursor = "not-allowed";
            letter.title = "nu inca, iubire";
        }

        dayWrapper.appendChild(letter);
        daysContainer.appendChild(dayWrapper);
    }
}
