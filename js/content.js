document.addEventListener('DOMContentLoaded', () => {
  const toKebabCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
  }

  // Get the current heading element
  const currentHeadingElement = document.getElementById('current-heading')

  // Check if the current heading element exists
  if (!currentHeadingElement) {
    return
  }

  const currentHeading = currentHeadingElement.innerText

  // Define the headings for each directory
  const headingsByDirectory = {
    '/practices/national-interest-waiver': [
      'What is National Interest Waiver(NIW)?',
      'National Interest Waiver: Advanced Degree Requirement and Relevant Documentation',
      'Upgrading a Pending NIW to Premium Processing: A Step-by-Step Guide',
      'Self Petition',
      'Recommendation Letters',
      'Matter of Dhanasar',
      'List of Documents that are needed for NIW application',
      'There is No Disadvantage for Social Science Majors When Applying for NIW!',
      'NIW and STEM Majors',
      'Business Plan and its evidentiary weight',
      'Applying for NIW While Unemployed: Strategies for Success',
      'Evidentiary Weights of Recommendation Letter for NIW Application',
      'NIW application and F1 status',
    ],
    '/practices/marriage-green-card': [
      'Who can be a Sponsor for marriage Green Card?',
      'Adjustment of Status',
      'Consular Processing',
      'Criminal Records and Adjustment of Status',
      'Marriage while you are in Removal Proceeding',
      'Same Sex Marriage',
      'Waiver of Inadmissibility',
      'K Visa Fiance Visa',
      'Green Card Application Through Marriage and Estate Planning Featuring Prenuptial Agreement',
    ],
    '/practices/asylum-application-and-defense-of-deportation': [
      'Asylum',
      'Defensive Asylum vs. Affirmative Asylum',
    ],
    '/practices/wills-and-trusts': [
      'Importance of having a Will prepared for an Immigrant',
      'Understanding the Importance of Tenancy by the Entirety in Indiana for Homeowners',
      'A Comprehensive Approach: Immigration Lawyer Supporting Immigrants Beyond Immigration Law',
    ],
    '/practices/parole-in-place': [
      'Parole in Place: Undocumented Spouses of U.S. citizens',
      'Questions related to potential beneficiaries',
      'Application Process',
    ],
  }

  // Get the current URL path
  const currentPath = window.location.pathname

  // Extract the parent directory from the path
  const parentDirectory = currentPath.substring(0, currentPath.lastIndexOf('/'))

  // Get the headings for the current directory
  const headings = headingsByDirectory[parentDirectory] || []

  // Get the parent container where the <li> elements will be appended
  const parentContainer = document.getElementById('related-articles')

  // Check if the parent container exists and if the parent directory is in the headingsByDirectory object
  if (parentContainer && headings.length > 0) {
    // Filter out the current heading from the headings array
    const filteredHeadings = headings.filter(
      (heading) => heading !== currentHeading
    )

    // Loop through the filtered headings array
    filteredHeadings.forEach((heading, index) => {
      // Create a new <li> element
      const li = document.createElement('li')

      // Create a new <a> element
      const a = document.createElement('a')
      a.href = `${toKebabCase(heading)}.html`
      a.textContent = heading

      // Append the <a> element to the <li>
      li.appendChild(a)

      // Append the <li> element to the parent container
      parentContainer.appendChild(li)

      // Append the <hr> element if it's not the last item
      if (index < filteredHeadings.length - 1) {
        const hr = document.createElement('hr')
        hr.className = 'border-gray-300'
        parentContainer.appendChild(hr)
      }
    })
  }

  // Define the headings for the case-study directory
  const caseStudyHeadings = [
    'Experienced Immigration Attorney for Indiana and Surrounding States Key Lessons from a National Interest Waiver Appeal',
    'Experienced Immigration Attorney in Indiana A Lesson in National Interest Waiver Case Dismissals',
    'Immigration Attorney in Indiana Insights on a National Interest Waiver Appeal for Forensic Accounting Services',
    'Immigration Attorney in Indiana National Interest Waiver (NIW) Denial Based on Exceptional Ability Without an Advanced Degree',
    'NIW Proposed Endeavor Medical Doctor National Importance',
    'NIW Success Story - Architect',
    'Why Was This Accountants NIW denied',
  ]

  // Check if the current directory is the case-study directory
  if (parentDirectory === '/practices/national-interest-waiver') {
    // Get the parent container where the <li> elements will be appended
    const parentContainer = document.getElementById('case-study')

    // Check if the parent container exists
    if (parentContainer) {
      // Loop through the caseStudyHeadings array
      caseStudyHeadings.forEach((heading, index) => {
        // Create a new <li> element
        const li = document.createElement('li')

        // Create a new <a> element
        const a = document.createElement('a')
        a.href = `${toKebabCase(heading)}.html`
        a.textContent = heading

        // Append the <a> element to the <li>
        li.appendChild(a)

        // Append the <li> element to the parent container
        parentContainer.appendChild(li)

        // Append the <hr> element if it's not the last item
        if (index < caseStudyHeadings.length - 1) {
          const hr = document.createElement('hr')
          hr.className = 'border-gray-300'
          parentContainer.appendChild(hr)
        }
      })
    }
  }

  // Define the headings for the artists-and-niw directory
  const artistsAndNiwHeadings = [
    'Artists and NIW',
    'NIW for Artists Required for Higher Standard of Review',
  ]

  // Check if the current directory is the artists-and-niw directory
  if (parentDirectory === '/practices/national-interest-waiver') {
    // Get the parent container where the <li> elements will be appended
    const parentContainer = document.getElementById('artists-and-niw')

    // Check if the parent container exists
    if (parentContainer) {
      // Loop through the artistsAndNiwHeadings array
      artistsAndNiwHeadings.forEach((heading, index) => {
        // Create a new <li> element
        const li = document.createElement('li')

        // Create a new <a> element
        const a = document.createElement('a')
        a.href = `${toKebabCase(heading)}.html`
        a.textContent = heading

        // Append the <a> element to the <li>
        li.appendChild(a)

        // Append the <li> element to the parent container
        parentContainer.appendChild(li)

        // Append the <hr> element if it's not the last item
        if (index < artistsAndNiwHeadings.length - 1) {
          const hr = document.createElement('hr')
          hr.className = 'border-gray-300'
          parentContainer.appendChild(hr)
        }
      })
    }
  }
})
