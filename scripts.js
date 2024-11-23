function copyRecipe() {
  // Get the desired sections
  const ingredientsSection = document.querySelector('#ingredients');
  const instructionsSection = document.querySelector('#instructions');

  // Extract the text content of the sections.
  const ingredientsText = ingredientsSection.textContent;
  const instructionsText = instructionsSection.textContent;

  // Combine the text content.
  const textContent = ingredientsText + '\n' + instructionsText;

  // Copy text content to clipboard.
  navigator.clipboard.writeText(textContent)
    .then(() => {
      console.log('Text copied to clipboard');
    })
    .catch(err => {
      console.error('Failed to copy: ', err);
    });

  // Provide feedback to the user.
  alert('Recipe text copied to clipboard!');
}
