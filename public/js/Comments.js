async function commentSubmit(event) {
  event.preventDefault();

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const bar_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(bar_id);

  if (comment_text) {
    const response = await fetch("/Users/comments", {
      method: "POST",
      body: JSON.stringify({
        comment_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector("#submit-btn").addEventListener("submit", commentSubmit);
