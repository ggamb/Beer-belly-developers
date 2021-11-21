async function commentSubmit(event) {
  event.preventDefault();
  console.log("in comment submit")

  const comment_text = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const bar_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  console.log('comment_text', comment_text);
  console.log('bar_id', bar_id);

  if (comment_text) {

    const response = await fetch("/api/comment/", {
      method: "post",
      body: JSON.stringify({
        comment_id,
        comment_text,
        BarList_id : bar_id
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
