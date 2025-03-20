const body = document.querySelector(".mainBody");
const inputField = document.querySelectorAll("#uInput");
const addBtn = document.querySelector("#btn");
const contentDiv = document.querySelector(".firstSection");

inputField.forEach((uInput) => {
    addBtn.addEventListener('click', () => {
        const userAddItems = uInput.value.trim();
        if (userAddItems === "") {
            alert("please write somethings...");
        } else {
            let el = document.createElement("li");
            el.className = "listItems";
            contentDiv.appendChild(el);
            el.innerText = userAddItems;

            const dateSpan = document.createElement('span');
            dateSpan.className = 'date-span';

            const currentDate = new Date();
            dateSpan.innerText = ` Added on: ${currentDate.toLocaleString()} `;
            el.appendChild(dateSpan);

            const removeButton = document.createElement('button');
            removeButton.textContent = 'remove';
            removeButton.className = 'remove-list';
            el.appendChild(removeButton);
            el.classList.add('fade-in');

            removeButton.addEventListener('click', () => {
                el.classList.add('fade-out');
                doneTask.remove();
                removeButton.remove();
                setTimeout(() => {
                    contentDiv.removeChild(el);
                }, 500);
            });

            const doneTask = document.createElement('button');
            doneTask.textContent = 'done';
            doneTask.className = 'doneTask';
            el.appendChild(doneTask);
            doneTask.addEventListener('click', () => {
                const completionMessage = document.createElement('span');
                el.appendChild(completionMessage);
                completionMessage.innerText = " Congratulations! You have completed the task";
                doneTask.remove();
                removeButton.remove();
                const currentCompletionDate = new Date();
                dateSpan.innerText = ` You have Completed a Task... ${currentCompletionDate.toLocaleString()} `;
                setTimeout(() => {
                    contentDiv.removeChild(el);
                }, 2000);
            });
        }
    });
});
