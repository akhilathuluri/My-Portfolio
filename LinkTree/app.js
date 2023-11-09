const shareButtons = document.querySelectorAll('.tile-share-button')
const shareButton2 = document.querySelector('.share-button')
console.log(shareButtons)
console.log(shareButton2)

async function copyText(e) {
//prevent button going to the site
    e.preventDefault()
    const link = this.getAttribute('link')
    console.log(link)
    try {
        await navigator.clipboard.writeText(link)
        alert("Copied the text: " + link)
    } catch (err) {
        console.error(err)
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText))
    shareButton2.addEventListener('click', copyText)



document.addEventListener('mousemove', (e) => {
  const cursor = document.querySelector('.custom-cursor');
  cursor.style.top = e.pageY + 'px';
  cursor.style.left = e.pageX + 'px';
});
