const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: []
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: []
    }
    
  ];
  
  function generateComment(comment, level) {
    const container = document.getElementById("comments-container");
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.style.marginLeft = level * 20 + "px"; // Adjust indentation based on nesting level
    commentDiv.textContent = comment.text;
    container.appendChild(commentDiv);
  
    comment.replies.forEach(reply => {
      generateComment(reply, level + 1); // Recursive call for replies with increased nesting level
    });
  }
  
  function generateComments() {
    comments.forEach(comment => {
      if (comment.parentId === null) {
        generateComment(comment, 0); // Start with top-level comments
      }
    });
  }
  
  generateComments();
  