
function addApproverRow() {
    const list = document.getElementById('approvers-list');
    const newId = list.children.length + 1;
    
    const newRow = document.createElement('tr');
    newRow.setAttribute('data-id', newId);
    newRow.innerHTML = `
        <td>${newId}</td>
        <td><input type="text" placeholder="Approver Name" required></td>
        <td><input type="checkbox"></td>
        <td><button class="remove-btn" onclick="removeApproverRow(this)">Remove</button></td>
    `;
    
    list.appendChild(newRow);

    updateRowNumbers();
}

function removeApproverRow(buttonElement) {
    const row = buttonElement.closest('tr');
    row.remove();
    

    updateRowNumbers();
}


function updateRowNumbers() {
    const list = document.getElementById('approvers-list');
    Array.from(list.children).forEach((row, index) => {
        row.querySelector('td:first-child').textContent = index + 1;
        row.setAttribute('data-id', index + 1);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-approver-btn');
    if (addButton) {
        addButton.addEventListener('click', addApproverRow);
    }
    

    document.querySelectorAll('.remove-btn').forEach(button => {
        button.onclick = function() { removeApproverRow(this); };
    });
});