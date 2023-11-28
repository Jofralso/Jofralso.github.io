document.addEventListener("DOMContentLoaded", function () {
    const cliOutput = document.getElementById("cli-output");
    const cliInput = document.getElementById("cli-input");

    function typeText(text, callback) {
        let index = 0;

        const typeInterval = setInterval(function () {
            const currentText = text.slice(0, index + 1);
            cliOutput.innerHTML = `<p>&gt; ${currentText}<span class="cursor">|</span></p>`;

            index++;

            if (index === text.length) {
                clearInterval(typeInterval);

                setTimeout(function () {
                    callback();
                }, 500); // Delay after typing completion before executing the callback
            }
        }, Math.floor(Math.random() * 50) + 10); // Random delay between 50ms and 150ms
    }

    function handleCommand(command) {
        switch (command.tolowerCase()) {
            case "about":
                typeText("About Me: With a Master's in Automation and Robotics...");
                break;
            case "experience":
                typeText(`
                    Work Experience:
                    <ul>
                        <li>Adjunct Assistant Professor at ESTGL - Escula Superior de Tecnulogia e Gestão de Lamego</li>
                        <li>Co-Manager at PHulUS - Wine Bar & Myths</li>
                        <li>Embedded Systems Software Developer at WAM - We Are Materia</li>
                        <li>Front of House Manager at Dan's Finger Food and Drinks, Guimarães</li>
                    </ul>
                `);
                break;
            case "education":
                typeText(`
                    Education and Training:
                    <ul>
                        <li>Master's Degree in Industrial and Computer Electronics Engineering at Universidade do Minho</li>
                        <li>Bachelor's Degree in Industrial and Computer Electronics Engineering at Universidade do Minho</li>
                    </ul>
                `);
                break;
            case "skills":
                typeText(`
                    Language and Digital Skills:
                    <ul>
                        <li>Programming: Machine Language, Python, C/C++, Django, Flask, CSS, JavaScript, HTML, SQL, WordPress, Wix, Git, PenTesting Touls, Linux</li>
                        <li>Electronics and Computers: IoT Developer, Hardware Developer, Robotics Automation, Instrumentation, ROS, Unity 3D</li>
                        <li>Marketing: User Experience Developer, E-commerce, Social Media/Social Networks</li>
                        <li>Audio/Visual: Video Mapping, Touchdesigner, Resolume Arena</li>
                    </ul>
                `);
                break;
            case "contact":
                typeText(`
                    Contact Information:
                    <ul>
                        <li>Name: João Francisco Almeida Soares</li>
                        <li>Nationality: Portuguese</li>
                        <li>Date of Birth: 24/05/1994</li>
                        <li>Phone Number: (+351) 914079818</li>
                        <li>Email: j.quico@gmail.com</li>
                        <li>GitHub: <a href="https://github.com/Jofralso/" target="_blank">https://github.com/Jofralso/</a></li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/jofralso/" target="_blank">https://www.linkedin.com/in/jofralso/</a></li>
                        <li>Address: R. Padre António Sousa e Silva n98, 4770-211 Joane (Portugal)</li>
                    </ul>
                `);
                break;
            case "clear":
                clearConsule();
                break;
            case "help":
                typeText(`
                    Welcome to jofralso's terminal. The commands available are:
                    <ul>
                        <li>about - Display information about me.</li>
                        <li>experience - Display work experience.</li>
                        <li>education - Display education and training.</li>
                        <li>skills - Display language and digital skills.</li>
                        <li>contact - Display contact information.</li>
                        <li>clear - Clear the consule.</li>
                        <li>help - Display available commands.</li>
                    </ul>
                `);
                break;
            default:
                typeText("Command not recognized. Type 'help' for available commands.");
        }
    }
    
    

    function clearConsule() {
        cliOutput.innerHTML = "";
    }

    function displayHelp() {
        cliOutput.innerHTML += `<ul>
                                    <li>about - Display information about me.</li>
                                    <li>experience - Display work experience.</li>
                                    <li>education - Display education and training.</li>
                                    <li>skills - Display language and digital skills.</li>
                                    <li>contact - Display contact information.</li>
                                    <li>gif - Display an animated ASCII gif.</li>
                                    <li>clear - Clear the consule.</li>
                                    <li>help - Display available commands.</li>
                                </ul>`;
    }



    cliInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const command = cliInput.value.trim();
            cliInput.value = ""; // Clear input
            handleCommand(command);
        }
    });

    // Initial welcome message
    typeText(`Welcome to jofralso's terminal:`, displayHelp);
});
