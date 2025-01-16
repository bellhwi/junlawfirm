document.addEventListener('DOMContentLoaded', function () {
  const recentPostsContainer = document.getElementById('recent-posts')
  const blogCards = document.querySelectorAll('#blog-card')
  const recentPosts = []

  for (let i = 0; i < Math.min(5, blogCards.length); i++) {
    const h3Tag = blogCards[i].querySelector('h3')
    const aTag = blogCards[i].querySelector('a')
    const postTitle = h3Tag.textContent
    const postLink = aTag.getAttribute('href')

    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.href = postLink
    link.textContent = postTitle
    link.className = 'text-sm'

    listItem.appendChild(link)
    recentPosts.push(listItem)
  }

  recentPosts.forEach((post, index) => {
    recentPostsContainer.appendChild(post)
    if (index < recentPosts.length - 1) {
      const hr = document.createElement('hr')
      recentPostsContainer.appendChild(hr)
    }
  })

  const paragraphs = document.querySelectorAll('#post-desc') // #post-desc 요소를 모두 선택

  paragraphs.forEach(async (paragraph) => {
    // 각 #post-desc 요소에 대해 반복
    const parentDiv = paragraph.closest('div') // 가장 가까운 부모 div 요소를 찾음
    const anchor = parentDiv.querySelector('a') // 부모 div 내의 a 요소를 찾음
    const href = anchor.getAttribute('href') // a 요소의 href 속성을 가져옴

    try {
      const response = await fetch(href) // href URL에서 HTML 문서를 가져옴
      const text = await response.text() // 응답을 텍스트로 변환
      const parser = new DOMParser() // DOMParser 객체 생성
      const doc = parser.parseFromString(text, 'text/html') // 텍스트를 HTML 문서로 파싱

      const elements = Array.from(doc.body.querySelectorAll('div, p')).filter(
        // 모든 div 및 p 요소를 배열로 변환하고 필터링
        (el) => el.textContent.length > 200 // 자식 요소가 없고 텍스트 길이가 100자 이상인 요소만 선택
      )

      if (elements.length > 0) {
        // 100자 이상의 텍스트를 가진 요소가 있는 경우
        const firstElement = elements[0] // 첫 번째 요소를 선택
        const content = // 요소의 텍스트를 50단어로 자르고 '...'을 추가
          firstElement.textContent.split(' ').slice(0, 200).join(' ') + '[...]'
        paragraph.textContent = content // 자른 텍스트를 paragraph 요소에 설정
      }
    } catch (error) {
      // 오류가 발생한 경우
      console.error('Error fetching or parsing document:', error) // 오류 메시지를 콘솔에 출력
    }
  })
})
