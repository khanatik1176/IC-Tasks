import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../pages/RootLayout";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import PostList from "../pages/PostList";
import UserList from "../pages/UserList";
import PostDetails from "../pages/PostDetails";
import CounterApp from "../pages/CounterApp";

export const rootRouter = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", index: true, element: <Shop /> },
			{ path: "/cart", element: <Cart /> },
			{ path: "/posts", element: <PostList /> },
			{ path: "/users", element: <UserList /> },
			{ path: "/posts/:postId", element: <PostDetails /> },
			{ path: "/counter-app-1", element: <CounterApp /> },
		],
		// posts/5
		// posts/4
	},

	// "posts/1"
	// "posts/3"
]);

// function add(num1, num2) {
// 	return num1 + num2;
// }

// add(100, 200);
// add(50, 70);
