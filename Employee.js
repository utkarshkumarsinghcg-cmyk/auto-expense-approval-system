document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('expenseTableBody');

    // Navigate to New Expense Submission Form
    document.querySelector('.action-btn.primary').addEventListener('click', () => {
        console.log('Action: Navigating to New Expense Submission Form (NEW.HTML)...');
        window.location.href = 'NEW.HTML';
    });

    // Trigger file-picker for uploads
    document.querySelector('.action-btn.secondary').addEventListener('click', () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.pdf, .jpg, .png';
        fileInput.multiple = true;

        fileInput.onchange = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                console.log(`Successfully selected ${files.length} file(s) for upload.`);
                alert(`Upload initiated for ${files.length} file(s). (Server-side handling required)`);
            }
        };

        fileInput.click();
    });

    // Delegate table-row action buttons
    tableBody.addEventListener('click', (event) => {
        const target = event.target.closest('.table-action');
        if (!target) return;

        const row = target.closest('tr');
        const expenseId = row.querySelector('[data-label="Description"]').textContent;

        if (target.classList.contains('edit-btn')) {
            handleEdit(expenseId);
        } else if (target.classList.contains('view-btn')) {
            handleView(expenseId);
        } else if (target.classList.contains('submit-btn')) {
            handleSubmit(expenseId, row);
        }
    });

    function handleEdit(id) {
        console.log(`Action: Editing expense: "${id}"`);
        window.location.href = `NEW.HTML?id=${encodeURIComponent(id)}`;
    }

    function handleView(id) {
        console.log(`Action: Viewing expense: "${id}"`);
        alert(`Opening detailed view for expense: "${id}".`);
    }

    function handleSubmit(id, row) {
        if (confirm(`Are you sure you want to submit the expense: "${id}"?`)) {
            console.log(`Action: Submitting expense: "${id}"`);

            // Update status cell
            const statusCell = row.querySelector('[data-label="Status"]');
            statusCell.innerHTML = '<span class="status-tag submitted">Submitted</span>';
            row.setAttribute('data-status', 'Submitted');

            // Replace action buttons with View only
            const actionsCell = row.querySelector('.actions-cell');
            actionsCell.innerHTML = '<button class="table-action view-btn"><i class="fas fa-eye"></i></button>';

            alert(`Expense "${id}" has been submitted for approval.`);
        }
    }
});
