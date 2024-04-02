// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Get all empty hearts
  const emptyHearts = document.querySelectorAll(".like-glyph");

  // Add click event listener to each empty heart
  emptyHearts.forEach(heart => {
    heart.addEventListener("click", async (event) => {
      try {
        // Simulate server call
        await mimicServerCall();
        
        // Change heart to full
        event.target.innerText = FULL_HEART;
        event.target.classList.add("activated-heart");
      } catch (error) {
        // Display error message
        const errorModal = document.getElementById("modal");
        const errorMessage = document.getElementById("modal-message");
        errorMessage.textContent = error;
        errorModal.classList.remove("hidden");
        
        // Hide error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      }
    });
  });

  // Get all full hearts
  const fullHearts = document.querySelectorAll(".activated-heart");

  // Add click event listener to each full heart
  fullHearts.forEach(heart => {
    heart.addEventListener("click", (event) => {
      // Change heart to empty
      event.target.innerText = EMPTY_HEART;
      event.target.classList.remove("activated-heart");
    });
  });
});

// Function to mimic server call
function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// Function to hide modal
function hideModal() {
  const errorModal = document.getElementById("modal");
  errorModal.classList.add("hidden");
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}