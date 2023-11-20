document.addEventListener("DOMContentLoaded", function () {
    const cliOutput = document.getElementById("cli-output");
    const cliInput = document.getElementById("cli-input");

    // Function to handle commands
    function handleCommand(command) {
        switch (command.toLowerCase()) {
            case "about":
                displayAboutMe();
                break;
            case "experience":
                displayExperience();
                break;
            case "education":
                displayEducation();
                break;
            case "skills":
                displaySkills();
                break;
            case "contact":
                displayContactInfo();
                break;
            case "clear":
                clearConsole();
                break;
            case "help":
                displayHelp();
                break;
            default:
                cliOutput.innerHTML += `<p>Command not recognized. Type 'help' for available commands.</p>`;
        }
    }

    // Function to display "About Me" information
    function displayAboutMe() {
        cliOutput.innerHTML += `<p>About Me: With a Master's in Automation and Robotics...</p>`;
    }

    // Function to display work experience information
    function displayExperience() {
        cliOutput.innerHTML += `<p>Work Experience:</p>`;
        // Add your work experience details here
    }

    // Function to display education information
    function displayEducation() {
        cliOutput.innerHTML += `<p>Education and Training:</p>`;
        // Add your education details here
    }

    // Function to display skills information
    function displaySkills() {
        cliOutput.innerHTML += `<p>Language and Digital Skills:</p>`;
        // Add your language and digital skills details here
    }

    // Function to display contact information
    function displayContactInfo() {
        cliOutput.innerHTML += `<p>Contact Information:</p>`;
        // Add your contact details here
    }

    // Function to clear the console
    function clearConsole() {
        cliOutput.innerHTML = "";
    }

    // Function to display help information
    function displayHelp() {
        cliOutput.innerHTML += `<p>You are now in jofralso's terminal.</p>`;
        cliOutput.innerHTML += `<p>The commands available are:</p>`;
        cliOutput.innerHTML += `<ul>
                                    <li>about - Display information about me.</li>
                                    <li>experience - Display work experience.</li>
                                    <li>education - Display education and training.</li>
                                    <li>skills - Display language and digital skills.</li>
                                    <li>contact - Display contact information.</li>
                                    <li>clear - Clear the console.</li>
                                    <li>help - Display available commands.</li>
                                </ul>`;
    }

    // Event listener for Enter key in the input
    cliInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            const command = cliInput.value.trim();
            cliInput.value = ""; // Clear input
            cliOutput.innerHTML += `<p>&gt; ${command}</p>`;
            handleCommand(command);
            // Scroll to the bottom to show the latest output
            cliOutput.scrollTop = cliOutput.scrollHeight;
        }
    });

    // Initial welcome message
    displayHelp();
});
