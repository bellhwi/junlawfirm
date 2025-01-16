document.addEventListener('DOMContentLoaded', () => {
  const toKebabCase = (str) => {
    return str
      .toLowerCase() // Convert to lowercase
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
      .replace(/^-+|-+$/g, '') // Remove leading and trailing hyphens
  }

  const currentHeadingElement = document.getElementById('current-heading')
  if (!currentHeadingElement) return

  const currentHeading = currentHeadingElement.innerText
  const currentPath = window.location.pathname
  const parentDirectory = currentPath.substring(0, currentPath.lastIndexOf('/'))

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
    '/practices/security-litigation': [
      'Facing Disputes With Financial Institutions?',
      'Identifying a Tort Claim Against Brokerage Firms, Financial Advisors, and Financial Institutions',
      'Understanding Churning: Its Impact on Your Investment and How to Protect Yourself',
      'Fiduciary Duty in the Financial Industry',
      'What is FINRA?',
      'Calculating Damages',
      'Understanding FINRA Rules: Rule 2111 (Suitability) and Rule 2020',
      'Community Suitability Issues and Their Impact on Immigrants',
      'Elder Abuse in Financial Services: Understanding FINRA Rule 2111 and Suitability Issues',
      'Dealing With a Financial Institute For The Mismanagement of Your Funds, Saving and Other Resources',
      'Legal Standards in Indiana for Tortious Acts and Damages',
      'Our Attorneys',
    ],
  }

  const caseStudyHeadings = [
    'Experienced Immigration Attorney for Indiana and Surrounding States Key Lessons from a National Interest Waiver Appeal',
    'Experienced Immigration Attorney in Indiana A Lesson in National Interest Waiver Case Dismissals',
    'Immigration Attorney in Indiana Insights on a National Interest Waiver Appeal for Forensic Accounting Services',
    'Immigration Attorney in Indiana National Interest Waiver (NIW) Denial Based on Exceptional Ability Without an Advanced Degree',
    'NIW Proposed Endeavor Medical Doctor National Importance',
    'NIW Success Story - Architect',
    'Why Was This Accountants NIW denied',
    'NIW Success Story: Pakistani Civil Engineer Paving the Way for Seismic Safety in the U.S.',
    'NIW Success Story: Mr. Lee – A Battery Recycling Innovator Advancing Renewable Energy in the U.S.',
  ]

  const artistsAndNiwHeadings = [
    'Artists and NIW',
    'NIW for Artists Required for Higher Standard of Review',
  ]

  const appendHeadings = (headings, containerId) => {
    const parentContainer = document.getElementById(containerId)
    if (!parentContainer) return

    headings.forEach((heading, index) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = `${toKebabCase(heading)}.html`
      a.textContent = heading
      li.appendChild(a)
      parentContainer.appendChild(li)

      if (index < headings.length - 1) {
        const hr = document.createElement('hr')
        hr.className = 'border-gray-300'
        parentContainer.appendChild(hr)
      }
    })
  }

  const headings = headingsByDirectory[parentDirectory] || []
  if (headings.length > 0) {
    const filteredHeadings = headings.filter(
      (heading) => heading !== currentHeading
    )
    appendHeadings(filteredHeadings, 'related-articles')
  }

  if (parentDirectory === '/practices/national-interest-waiver') {
    appendHeadings(caseStudyHeadings, 'case-study')
    appendHeadings(artistsAndNiwHeadings, 'artists-and-niw')
  }
})
