function submitEnquiry() {
    // Get values from the HTML inputs
    const name = document.getElementById('studentName').value;
    const phone = document.getElementById('parentPhone').value;
    const grade = document.getElementById('classLevel').value;

    // Check if fields are empty
    if (name === "" || phone === "" || grade === "") {
        alert("⚠️ Please fill in all details before sending.");
        return;
    }

    // Success Message
    const message = `Thank you, ${name}! \nWe have received your enquiry for ${grade} level.\nLeadEdge team will call you at ${phone} shortly.`;
    
    alert(message);

    // Optional: Clear the form after sending
    document.getElementById('studentName').value = "";
    document.getElementById('parentPhone').value = "";
    document.getElementById('classLevel').value = "";
}
