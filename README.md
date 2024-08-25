# Quick Kanban

Quick Kanban is a Frappe app designed to enhance the default Kanban view in Frappe/ERPNext by replacing it with a Vue-based Kanban. This app aims to provide better performance and an improved user experience, especially for instances with a high volume of Kanban cards and frequent updates.

## Objective

- **Vue-based Kanban View**: Improved performance and user interface.
- **Optimized for Large Data**: Handles hundreds of cards efficiently.
- **Seamless Integration**: Works seamlessly within the Frappe framework.

## Installation

Follow the steps below to install and set up Quick Kanban in your Frappe/ERPNext instance.

### Step 1: Get the App

Run the following command to get the Quick Kanban app from the repository:

```bash
bench get-app https://github.com/tridz-dev/quick_kanban.git
```

### Step 2: Install the App

Once you have the app, install it on your desired site using the command below. Replace `[sitename]` with the name of your site:

```bash
bench install-app --site [sitename] quick_kanban
```

### Step 3: Modify Site Config

After installation, To enable the new Kanban board, add the `kanban_beta` attribute to the `site_config.json` in your `sites/[sitename]` directory.

```json
 "kanban_beta": 1
```

To enable the new Kanban board for specific users, add the usernames of desired users to the `kanban_beta_users` list in `site_config.json`.<br> For example:

```json
 "kanban_beta_users": [
     "Username1",
     "Username2"
 ]
```

## Usage

Create a Kanban Board for any doctype using the desired field as a reference, and you're all set!

### Highlighted Field

You can choose a field to be highlighted inside the Kanban card. To enable this feature, select a field as the `Highlighted Field` for your Kanban board.

Additionally, you can assign a color for each value of that field in the highlight table of your Kanban Board. Simply type the expected value in the Tag column and select a corresponding color for it.<br><br>
For example: <br><br>
![kanban](https://github.com/user-attachments/assets/b25bac25-189c-4e79-a0ee-5e1ba0cc1fa0)

## License

This project is licensed under the MIT License.
