        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('select.customselect').forEach(function(originalSelect) {
                // Skip if already processed
                if (originalSelect.dataset.enhanced) return;
                originalSelect.dataset.enhanced = true;

                // Hide the original select box
                originalSelect.style.position = 'absolute';
                originalSelect.style.opacity = 0;
                originalSelect.style.pointerEvents = 'none';
                originalSelect.style.height = '0';
                originalSelect.style.margin = '0';
                originalSelect.style.padding = '0';

                // Create the wrapper and display elements
                const wrapper = document.createElement('div');
                wrapper.classList.add('custom-select-wrapper');

                const display = document.createElement('div');
                display.className = 'custom-select-display';
                display.textContent = 'Select...';

                const dropdown = document.createElement('div');
                dropdown.className = 'custom-select-dropdown';

                const search = document.createElement('input');
                search.type = 'text';
                search.placeholder = 'Search...';
                dropdown.appendChild(search);

                const selectAllLabel = document.createElement('label');
                const selectAllCheckbox = document.createElement('input');
                selectAllCheckbox.type = 'checkbox';
                selectAllLabel.appendChild(selectAllCheckbox);
                selectAllLabel.appendChild(document.createTextNode(' Select All'));
                selectAllCheckbox.classList.add('form-check-input');
                dropdown.appendChild(selectAllLabel);

                const checkboxes = [];

                Array.from(originalSelect.options).forEach(opt => {
                    const label = document.createElement('label');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.value = opt.value;
                    checkbox.classList.add('form-check-input'); // ✅ add Bootstrap class here
                    if (opt.selected) checkbox.checked = true;

                    checkboxes.push({
                        checkbox,
                        option: opt
                    });

                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(' ' + opt.text));
                    dropdown.appendChild(label);

                    checkbox.addEventListener('change', () => {
                        opt.selected = checkbox.checked;
                        updateDisplay();
                        updateSelectAllCheckbox();
                    });
                });


                // DOM assembly
                wrapper.appendChild(display);
                wrapper.appendChild(dropdown);
                originalSelect.parentNode.insertBefore(wrapper, originalSelect);
                wrapper.appendChild(originalSelect); // hide inside wrapper

                display.addEventListener('click', () => {
                    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
                });

                search.addEventListener('keyup', () => {
                    const term = search.value.toLowerCase();
                    dropdown.querySelectorAll('label').forEach(label => {
                        if (label.textContent.toLowerCase().includes(term) || label
                            .contains(selectAllCheckbox)) {
                            label.style.display = 'block';
                        } else {
                            label.style.display = 'none';
                        }
                    });
                });

                selectAllCheckbox.addEventListener('change', () => {
                    const checked = selectAllCheckbox.checked;
                    checkboxes.forEach(({
                        checkbox,
                        option
                    }) => {
                        checkbox.checked = checked;
                        option.selected = checked;
                    });
                    updateDisplay();
                });

                function updateSelectAllCheckbox() {
                    const allSelected = checkboxes.every(({
                        checkbox
                    }) => checkbox.checked);
                    const noneSelected = checkboxes.every(({
                        checkbox
                    }) => !checkbox.checked);
                    selectAllCheckbox.checked = allSelected;
                    selectAllCheckbox.indeterminate = !allSelected && !noneSelected;
                    selectAllCheckbox.classList.add('form-check-input');
                }

                function updateDisplay() {
                    const count = Array.from(originalSelect.selectedOptions).length;
                    const total = originalSelect.options.length;

                    if (count === 0) {
                        display.textContent = 'Select...';
                    } else if (count === total) {
                        display.textContent = 'Selected (All)';
                    } else {
                        display.textContent = `Selected (${count})`;
                    }
                }


                updateDisplay();
                updateSelectAllCheckbox();

                // Hide dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    if (!wrapper.contains(e.target)) {
                        dropdown.style.display = 'none';
                    }
                });
            });
        });
