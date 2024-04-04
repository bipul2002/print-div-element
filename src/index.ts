export class Print {
    static printDivById(divId: string): void {
        const printContent = document.getElementById(divId)?.innerHTML;
        if (!printContent) {
            console.error(`Div with ID '${divId}' not found.`);
            return;
        }

        const originalContent = document.body.innerHTML;
        document.body.innerHTML = printContent;

        window.print();

        // Restore original content
        document.body.innerHTML = originalContent;
    }


    static printDivByIdAdvance(divId: string): void {
        const printContent = document.getElementById(divId)?.innerHTML;
        if (!printContent) {
            console.error(`Div with ID '${divId}' not found.`);
            return;
        }

        //created a new div element

        const printContainer = document.createElement('div');
        printContainer.innerHTML = printContent;

        // Hide the print container
        printContainer.style.position = 'absolute';
        printContainer.style.left = '-9999px';
        document.body.appendChild(printContainer);

        // Print the content
        window.print();

        // Remove the print container
        document.body.removeChild(printContainer);
    }



    static printDivByIdModified(divId: string): void {
        const printContent = document.getElementById(divId);
        if (!printContent) {
            console.error(`Div with ID '${divId}' not found.`);
            return;
        }

        const printContainer = document.createElement('div');
        printContainer.appendChild(printContent.cloneNode(true)); // Cloning to avoid removing the element from its original place

        // Hide the print container
        printContainer.style.position = 'absolute';
        printContainer.style.left = '-9999px';
        document.body.appendChild(printContainer);

        // Print the content
        window.print();

        // Remove the print container
        document.body.removeChild(printContainer);
    }
}
