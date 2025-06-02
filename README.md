🧩 Custom MultiSelect Dropdown with Checkboxes, Search & Select-All (Vanilla JS)
This repository provides a lightweight and reusable custom multi-select dropdown component built with plain JavaScript, designed to mimic and enhance the functionality of plugins like Select2 — without any external dependencies.

🔥 Features
✅ Custom-designed dropdown with checkboxes
✅ Integrated search box to filter options
✅ Select All / Deselect All option
✅ Bootstrap-compatible checkbox styling (form-check-input)
✅ Dynamic display of selected count (e.g., Selected (2), Selected (All))
✅ Supports multiple dropdowns on the same page
✅ Fully accessible via form submission
✅ Hides original <select> and keeps it in sync (non-destructive)

📦 How It Works
This custom component enhances any <select multiple> element that has the class customselect. The original select is hidden, and a styled wrapper with a search bar, checkboxes, and a custom dropdown UI is rendered in its place. The component stays fully in sync with the original <select>, so form submissions and backend integrations work as expected.

📋 Usage
Add the customselect class to your <select multiple>:

html
Copy
Edit
<select class="form-select customselect" multiple>
    <option value="1">Option One</option>
    <option value="2">Option Two</option>
</select>
Include the JS and optional styles from the repo in your Blade or HTML file.

🧠 Example Behavior
Typing into the search bar filters the list of options.

Clicking "Select All" checks all boxes and marks all options as selected.

Selected items are shown as a count in the display (not tags), e.g.:

Select...

Selected (2)

Selected (All)

💡 Why Use This?
If you want a customizable, Bootstrap-compatible, and dependency-free alternative to Select2 for multi-select fields — especially in Laravel Blade or vanilla JS projects — this solution is lightweight, intuitive, and easily extendable.

🛠 Tech Stack
HTML5 <select multiple>

Vanilla JavaScript (no jQuery)

Bootstrap classes (form-select, form-check-input)
