📦 Custom Multiselect Dropdown with Checkboxes
This project provides a clean, user-friendly multiselect dropdown built entirely in vanilla JavaScript and easily pluggable into any HTML or Laravel Blade view. It mimics Select2's functionality while being fully lightweight and dependency-free.

✅ Features
Checkbox-based multiple selection

Select All and Deselect All functionality

Real-time search/filter inside the dropdown

Custom display label showing selected count (e.g., “Selected (3)”)

Hides original <select multiple> element for clean UI

Keyboard-friendly and mobile-responsive

Laravel Blade integration friendly

🔧 How It Works
The script:

Hides your original <select multiple> element

Wraps it in a custom container

Renders checkboxes for each <option>

Allows searching and selecting/deselecting options

Syncs selected checkboxes with the underlying <select> element

🚀 Integration
Just include the script at the end of your Blade or HTML file and add the class customselect to any <select multiple> element. The rest works automatically!

html
Copy
Edit
<select name="employees[]" class="form-select customselect" multiple>
  <option value="1">John Doe</option>
  <option value="2">Jane Smith</option>
</select>
