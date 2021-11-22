async function commentSubmit(event) {
  event.preventDefault();
  const comment_text = document.getElementById("comment-text").value;
  const bar_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  if (comment_text) {
    const response = await fetch("/api/comment/", {
      method: "post",
      body: JSON.stringify({
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

document.querySelector("#submit-btn").addEventListener('click', commentSubmit);
