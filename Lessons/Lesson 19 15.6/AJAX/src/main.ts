import { Todo } from "./types.js";

const btn1 = document.getElementById("btn1");
btn1?.addEventListener("click", async () => {
    const n = await getRandomNumberAfterDelay();
    console.log(n);
});

function getRandomNumberAfterDelay(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 1000);
            // resolve("abc"); // Error
            resolve(num);
        }, 3000);
    });
}

// --------------------------------------------------

const btn2 = document.getElementById("btn2");
btn2?.addEventListener("click", async () => {
    try {
        const todos = await getTodoList();
        displayTodos(todos);
    }
    catch (err: any) {
        alert(err.message);
    }
});

async function getTodoList(): Promise<Todo[]> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await fetch(url);
    const todos: Todo[] = await response.json();
    return todos;
}

function displayTodos(todos: Todo[]): void {
    const todoUL = document.getElementById("todoUL")!; // ! ==> סמוך עלי, הולך להיות אובייקט אמיתי
    todoUL.innerHTML = "";
    for (const item of todos) {
        const li = `
        <li style="color: ${item.completed ? "green" : "red"}">
            ${item.title} (${item.completed ? "done" : "not done"})
        </li>`;
        todoUL.innerHTML += li;
    }

}

// GO OVER ALL OF THIS!!!!!!!!! TOMOROW!! OR TODAY EVENING DOO THE HOMEWORK INCREADIBALY SLOW!!!!

