
[nasa.webm](https://user-images.githubusercontent.com/101692334/187377359-e3ef5e0e-5ba8-4b9a-a08f-66c26f018821.webm)


##  How It's Made:

Tech used: JavaScript, HTML, CSS, Visual Studio Code, Git Bash

Responsive site that allows the user to enter a date and recieve a picture, video or game of the day directly from NASA's API. Select the date, 6/19/2022, to play Super Planet Crash! 

## Optimizations

Optimized the site with media queries so that it works in mobile as well.

Added code to fix display problems caused by NASA's API sometimes sending different types of data than just images.

## Lessons Learned

NASA's API can send an image, video or game on different dates which required fine tuning of the main.js file. The iframe and img element would disturb the layout if both were on at once. So for this project, I had the iframe disappear if the media type was an image and if it was a video, the img element display was set to none.

This lead to a unique problem however, when the user selected multiple dates in a row. If an image was shown and the next json response contained a video file, then the video file would not appear since the iframe's display had been turned off during that first image request. So I added additional code, where the first step for a video would be to turn on the display of the iframe or if was an image, the first step would be to turn on the display of the img element.



