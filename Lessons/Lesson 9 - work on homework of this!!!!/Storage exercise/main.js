function chooseColor() {
            // 1. Get the select element
            const selectElement = document.getElementById("colorSelect");
            
            // 2. Get the value of the selected option
            const selectedColor = selectElement.value;
            
            // 3. Apply the color immediately
            document.body.style.backgroundColor = selectedColor;
            
            // 4. Save the color to localStorage so it persists across reloads
            localStorage.setItem("savedColor", selectedColor);
        }

        function setColor() {
            // 1. Retrieve the saved color from localStorage
            const savedColor = localStorage.getItem("savedColor");
            
            // 2. Check if a color was previously saved before applying
            if (savedColor) {
                document.body.style.backgroundColor = savedColor;
            }}