import "./App.css";
import { useEffect, useState } from "react";

// userId
// loading
function App() {
	const [todo, setTodo] = useState([]);
	const [userID, setUserID] = useState(1);
	const [fetching, setFetching] = useState(false);
  
	function handleChange(e) {
		console.log(e.target.value);
		setUserID(e.target.value);
	}
	useEffect(() => {
		setFetching(true);

    //fetch returns a promise
		console.log("test");
		fetch(`https://dummyjson.com/todos/user/${userID}`)
			.then((res) => res.json())
			.then((data) => {
				setTodo(data.todos);
				setFetching(false);
			});
	}, [userID]);

	return (
		<section>
			<header>
				<h1>TODOS</h1>
			</header>

			<div>
				<label htmlFor="user">Please select an User</label>
				<select id="user" onChange={handleChange}>
					<option value="1">Arthur</option>
					<option value="2">Lily</option>
					<option value="3">George</option>
				</select>
			</div>

			<main>
				{fetching ? (
					<p>Loading Data</p>
				) : (
					<ul>
						{todo.map((task) => {
							return <li key={task.id}>{task.todo}</li>;
						})}
					</ul>
				)}
			</main>

		</section>
	);
}

export default App;
