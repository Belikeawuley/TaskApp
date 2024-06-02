# rn-assignment3-11337494
CategoryButton: A button component that displays a category name and icon. It is used to display a list of categories in the app.
TaskList: A list component that displays a list of tasks for a given category. It is used to display the tasks in a category when a category button is pressed.
TaskItem: A component that displays a single task with its title, description, and icon. It is used to display individual tasks in the task list.
Header: A component that displays the app's header with a title and navigation buttons.
Modal: A component that displays a modal window with a list of tasks for a given category.
CategoryButton

Props:
category: The category object to be displayed.
onPress: The function to be called when the button is pressed.
Description: A button component that displays a category name and icon. It is used to display a list of categories in the app.
TaskList

Props:
tasks: The array of tasks to be displayed.
category: The category object that the tasks belong to.
Description: A list component that displays a list of tasks for a given category. It is used to display the tasks in a category when a category button is pressed.
TaskItem

Props:
task: The task object to be displayed.
onPress: The function to be called when the task is pressed.
Description: A component that displays a single task with its title, description, and icon. It is used to display individual tasks in the task list.
Header

Props:
title: The title of the app.
navigation: The navigation buttons to be displayed.
Description: A component that displays the app's header with a title and navigation buttons.
Modal

Props:
tasks: The array of tasks to be displayed.
category: The category object that the tasks belong to.
onClose: The function to be called when the modal is closed.
Description: A component that displays a modal window with a list of tasks for a given category.
