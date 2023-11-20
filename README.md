# React Project Manager

Simple task and project management application built with React. It allows users to create projects, add tasks to these projects, and manage them. The application is built with React, including hooks and functional components.

## Main Components
- `App`: The root component of the application. It maintains the state of the projects and tasks. It also contains the logic for adding, deleting, and selecting projects and tasks.

- `Sidebar`: Displays a list of all the projects. It allows users to select a project, which then displays the tasks associated with that project. It also provides an option to add a new project.

- `NewProject`: A form that allows users to create a new project. It validates the input and displays a modal with an error message if the input is invalid.

- `SelectedProject`: Displays the details of the selected project, including its tasks. It allows users to add new tasks, delete existing tasks, and delete the project itself.

- `Tasks`: Displays a list of tasks for the selected project. It allows users to add new tasks and delete existing ones.

## Other Components

- `NoProjectSelected`: Displayed when no project is selected. It prompts the user to select a project or create a new one.

- `NewTask`: A form that allows users to create a new task. It validates the input and displays a modal with an error message if the input is invalid.

- `Modal`: A reusable component that displays a modal dialog. It is used to display error messages when the input in the NewProject and NewTask forms is invalid.

- `Button`: A reusable component that displays a button. It is used throughout the application for various actions such as adding a new project or task, deleting a project or task, and closing modals.

- `Input`: A reusable component that displays an input field or a textarea. It is used in the NewProject and NewTask forms for user input.
