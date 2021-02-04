

async function newFormHandler(event) {
    event.preventDefault();

    // Function to generate random number
    const randomNumber = (min, max) => {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const randomImageNumber = randomNumber(1, 5);

    const title = document.querySelector('input[name="post-title"]').value;
    const post = document.querySelector('textarea[name="post-body"]').value;
    const post_image = `images/post-image-${randomImageNumber}.jpg`

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        post,
        post_image
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
}

  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);