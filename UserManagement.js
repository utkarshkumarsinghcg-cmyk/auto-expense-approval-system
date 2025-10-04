function addNewRow() {
    const tableBody = document.getElementById('userTableBody');
    
    
    const newRow = document.createElement('tr');
    newRow.classList.add('new-row'); 


    const newRowContent = `
        <td data-label="User"><input type="text" placeholder="Full Name" class="editable-input"></td>
        <td data-label="Role">
            <select class="editable-input">
                <option value="Employee">Employee</option>
                <option value="Manager">Manager</option>
                <option value="Admin">Admin</option>
            </select>
        </td>
        <td data-label="Manager"><input type="text" placeholder="Manager Name" class="editable-input"></td>
        <td data-label="Email"><input type="email" placeholder="email@company.com" class="editable-input"></td>
        <td data-label="Actions">
            <button class="action-btn save-btn">Save</button>
            <button class="action-btn cancel-btn" onclick="this.closest('tr').remove()">Cancel</button>
        </td>
    `;
    
    newRow.innerHTML = newRowContent;
    
 
    tableBody.prepend(newRow);

   
    newRow.querySelector('.save-btn').addEventListener('click', function() {
      
        alert('User details saved (Simulation)!');
      
        const inputs = newRow.querySelectorAll('.editable-input');
        
       
        inputs.forEach(input => {
            const cell = input.closest('td');
            const value = input.value || input.options[input.selectedIndex].text; 
            cell.innerHTML = value;
            cell.setAttribute('data-label', cell.getAttribute('data-label')); 
        });

    
        const actionCell = newRow.querySelector('td[data-label="Actions"]');
        actionCell.innerHTML = '<button class="action-btn send-password-btn">Send password</button>';
        
        newRow.classList.remove('new-row'); 
    });
}