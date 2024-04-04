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
}
