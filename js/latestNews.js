document.addEventListener('DOMContentLoaded', function () {
  fetch('blog.html')
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser()
      const doc = parser.parseFromString(data, 'text/html')
      const blogCards = doc.querySelectorAll('#blog-card')
      const recentPostsContainer = document.querySelector(
        '.latest-news-container'
      )
      const recentPosts = []

      for (let i = 0; i < Math.min(4, blogCards.length); i++) {
        const h3Tag = blogCards[i].querySelector('h3')
        const aTag = blogCards[i].querySelector('a')
        const dateTag = blogCards[i].querySelector('p.text-gray-500')
        const postTitle = h3Tag.textContent
        const postLink = aTag.getAttribute('href')
        const postDate = dateTag.textContent

        recentPosts.push({ postTitle, postLink, postDate })
      }

      const fetchDescriptions = recentPosts.map(async (post) => {
        try {
          const response = await fetch(post.postLink)
          const text = await response.text()
          const parser = new DOMParser()
          const doc = parser.parseFromString(text, 'text/html')

          const elements = Array.from(
            doc.querySelectorAll('.content-container div, .content-container p')
          ).filter((el) => el.textContent.length > 200)

          if (elements.length > 0) {
            const firstElement = elements[0]
            const content =
              firstElement.textContent.split(' ').slice(0, 50).join(' ') + '...'
            post.description = content
          } else {
            post.description = ''
          }
        } catch (error) {
          console.error('Error fetching or parsing document:', error)
          post.description = ''
        }
      })

      Promise.all(fetchDescriptions).then(() => {
        const postCards = recentPosts
          .map(
            (post) => `
          <div class="bg-gray-100 h-full">
            <div class="relative rounded shadow-lg bg-white h-full">
              <div class="p-8 h-full flex flex-col justify-between">
                <div>
                  <h4 class="text-2xl font-bold mb-2">${post.postTitle}</h4>
                  <p class="text-gray-700 text-sm">${post.postDate}</p>
                  <p class="text-gray-700 mt-4">${post.description}</p>
                </div>
                <a
                  href="${post.postLink}"
                  rel="noopener"
                  class="mt-4 uppercase w-max text-color-primary inline-block underline font-semibold underline-offset-4 text-sm text-gray-700"
                >read more</a>
              </div>
            </div>
          </div>
        `
          )
          .join('')

        recentPostsContainer.innerHTML = postCards
      })
    })
    .catch((error) => console.error('Error fetching blog posts:', error))
})
