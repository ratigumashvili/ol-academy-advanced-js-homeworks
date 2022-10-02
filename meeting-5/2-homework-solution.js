console.log("Start");

const usersDB = {
  "user1@hw.js": [{ title: "video1" }, { title: "video2" }],
  "user2@hw.js": [{ genre: "genre1" }, { genre: "genre1" }],
  "user3@hw.js": [],
};

// your code goes here...

function displayError(errorMessage) {
  console.error(new Error(errorMessage));
}

function loginUser(email, password, setSuccess, setError) {
  if (Object.keys(usersDB).includes(email)) {
    setTimeout(() => {
      console.log("Now we have the data of user:", email);
      setSuccess({ userEmail: email });
    }, 3000);
  } else {
    setTimeout(() => {
      setError("User not found");
    }, 3000);
  }
}

function getUserVideos(email, setSuccess, setError) {
  if (usersDB[email].length !== 0) {
    setTimeout(() => {
      setSuccess(usersDB[email]);
    }, 2000);
  } else {
    setTimeout(() => {
      setError("Videos not found");
    }, 2000);
  }
}

function videoDetails(video, setSuccess, setError) {
  if (video.title) {
    setTimeout(() => {
      setSuccess(video.title);
    }, 2000);
  } else {
    setTimeout(() => {
      setError("Video title not found");
    }, 2000);
  }
}

const getPassedUsersFirstVideoTitle = (user) =>
  loginUser(
    user,
    1234,
    (user) => {
      console.log("user:", user);
      getUserVideos(
        user.userEmail,
        (videos) => {
          console.log("videos:", videos);
          videoDetails(
            videos[0],
            (title) => {
              console.log("title:", title);
            },
            (err) => displayError(err)
          );
        },
        (err) => displayError(err)
      );
    },
    (err) => displayError(err)
  );

getPassedUsersFirstVideoTitle("user1@hw.js");

console.log("Finish");
