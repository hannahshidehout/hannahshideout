<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hannah's Hideout</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Atma:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Page header with profile -->
  <div class="page-header">
    <div class="profile-container">
      <img src="https://github.com/hannahshidehout/hannahshideout/raw/7f9be6d0b1e67c231f53fae1293abfb61cea9958/A4560B27-053F-4879-99C8-5F265009999B_1_201_a.jpg" 
           alt="Hannah's Profile" 
           class="profile-pic">
      <div class="speech-bubble">Hi! This is me, Hannah ♡</div>
    </div>

    <div class="content-box">
      <h1>Welcome to Hannah's Hideout</h1>
      <p>You found my hidden corner!</p>
    </div>
  </div>

  <!-- Guestbook box (top-right fixed) -->
  <div class="guestbook-box">
    <h2>Sign my Guestbook!</h2>
    <form id="guestbook-form">
      <input type="text" name="name" placeholder="Your name" required>
      <textarea name="message" placeholder="Leave a nice note..." rows="3" required></textarea>
      <button type="submit">Sign</button>
    </form>
    <p id="response-msg"></p>
  </div>

  <!-- JavaScript -->
  <script src="guestbook.js"></script>
</body>
</html>
