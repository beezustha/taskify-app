import { useState } from "react";

export default function App() {
	const [newItems, setNewItems] = useState("");
	const [descriptions, setDescriptions] = useState("");
	const [todos, setTodos] = useState([]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("clicked");
		setTodos(() => {
			return [
				...todos,
				{
					id: crypto.randomUUID(),
					title: newItems,
					description: descriptions,
				},
			];
		});
		setDescriptions("");
		setNewItems("");
	};
	// console.log(todos);

	const deleteTodo = (id) => {
		setTodos((currTodo) => currTodo.filter((todo) => todo.id !== id));
	};
	return (
		<>
			<form action="" onSubmit={handleSubmit}>
				{" "}
				<div className="container w-screen bg-[#424769] mx-auto h-[480px] flex flex-col items-center justify-center font-poppins">
					<div className="mx-auto">
						<h3 className="header-title text-center p-8 text-2xl text-white">
							Taskify Application
						</h3>
					</div>
					<div className="flex flex-col items-center w-full px-4">
						<input
							value={newItems}
							onChange={(e) => {
								setNewItems(e.target.value);
							}}
							className="my-4 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							type="text"
							placeholder="Enter the task title"
						/>
						<textarea
							value={descriptions}
							onChange={(e) => setDescriptions(e.target.value)}
							id="message"
							className="h-48 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="Enter the task description"
						></textarea>
						<button
							className="rounded bg-purple-700 text-white mx-auto my-4 px-2 py-2"
							onClick={() => deleteTodo(todos.id)}
						>
							Create Task
						</button>
					</div>
				</div>
			</form>
			<div className="container w-screen h-auto flex flex-col items-center justify-center mt-3 text-2xl">
				<div className="text-purple-700">Todo List</div>{" "}
				{todos.map((todo) => {
					return (
						<>
							<div
								id={todo.id}
								className="w-full h-auto rounded-md border-solid border-2 border-indigo-600 p-4 flex flex-col my-4"
							>
								<div className="flex items-center justify-between my-6 bg-indigo-800 rounded">
									<h5 className="mb-2 text-2xl my-2 mx-3 font-bold tracking-tight text-gray-900 dark:text-white font-poppins">
										{todo.title}
									</h5>
									<div className="flex item-center justify-around mx-3">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="white"
											className="w-6 h-6 mx-3"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
											/>
										</svg>

										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="white"
											className="w-6 h-6"
											onClick={() => deleteTodo(todo.id)}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
											/>
										</svg>
									</div>
								</div>
								<p className="font-normal text-gray-700 dark:text-gray-400 text-base">
									{todo.description}
								</p>
							</div>
						</>
					);
				})}
			</div>
		</>
	);
}
