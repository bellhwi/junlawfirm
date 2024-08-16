document.addEventListener('DOMContentLoaded', () => {
  const contentHeading = document.getElementById('content-heading').innerText
  // Get the relatedArticlesUL element
  const relatedArticlesUL = document.getElementById('related-articles')
  // Function to convert a string to kebab case
  const toKebabCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
  }
  // Check if the element exists
  if (relatedArticlesUL) {
    // Get all <li> children of relatedArticlesUL
    const listItems = relatedArticlesUL.querySelectorAll('li')

    // Iterate over each <li> element and remove the 'font-bold' class
    listItems.forEach((li) => {
      li.classList.remove('font-bold')
    })

    // Create a new <hr> element
    const hr = document.createElement('hr')
    hr.className = 'border-gray-300'

    // Append the <hr> after the last <li> element
    relatedArticlesUL.appendChild(hr)

    // Create a new <li> element with the 'font-bold' class
    const newLi = document.createElement('li')
    newLi.className = 'font-bold'

    // Create the <a> element and set its attributes and content
    const newA = document.createElement('a')
    newA.href =
      '../national-interest-waiver-niw/there-is-no-disadvantage-for-social-science-majors-when-applying-for-niw.html#practice-container'
    newA.textContent =
      'There’s No Disadvantage for Social Science Majors When Applying for NIW!'

    // Append the <a> to the new <li>
    newLi.appendChild(newA)

    // Append the new <li> to the relatedArticlesUL
    relatedArticlesUL.appendChild(newLi)
  }

  console.log(toKebabCase(contentHeading))
})
